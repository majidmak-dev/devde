import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { evaluateAntiSpam } from '@/lib/anti-spam';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, service, message, website_hp, company_fax_hp, formLoadedAt } = body;

    // 1. Basic presence check
    if (!name || !email || !subject || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 2. Client IP extraction
    const clientIp = 
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // 3. Multi-tier anti-spam evaluation
    const spamCheck = evaluateAntiSpam(
      {
        name,
        email,
        subject,
        service,
        message,
        website_hp,
        company_fax_hp,
        formLoadedAt: formLoadedAt ? Number(formLoadedAt) : undefined
      },
      clientIp
    );

    // Rate limit response
    if (spamCheck.isRateLimited) {
      console.warn(`[AntiSpam RateLimit] Blocked request from IP ${clientIp} / Email: ${email}`);
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a few minutes before trying again.' },
        { status: 429 }
      );
    }

    // Silent honeypot / spam drop
    // We return HTTP 200 so bots believe they succeeded and stop mutating,
    // but we drop the email transmission so the inbox is never spammed.
    if (spamCheck.isSpam) {
      console.warn(`[AntiSpam Intercepted] Flagged as spam (${spamCheck.reason}) | Score: ${spamCheck.score} | IP: ${clientIp} | From: ${name} <${email}>`);
      return NextResponse.json(
        {
          success: true,
          message: 'Message received successfully! We will review your inquiry shortly.',
          filtered: true
        },
        { status: 200 }
      );
    }

    // 4. Legitimate submission -> Dispatch email
    const smtpHost = (process.env.SMTP_HOST || 'in10.fastwebhost.com').replace(/^"(.*)"$/, '$1');
    const smtpPort = Number((process.env.SMTP_PORT || '465').replace(/^"(.*)"$/, '$1'));
    const smtpUser = (process.env.SMTP_USER || 'hello@devdesigns.net').replace(/^"(.*)"$/, '$1');
    const smtpPass = (process.env.SMTP_PASS || '').replace(/^"(.*)"$/, '$1');
    const smtpSecure = (process.env.SMTP_SECURE || 'true').replace(/^"(.*)"$/, '$1') === 'true';

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
      },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 5000
    });

    const mailOptions = {
      from: `"DevDesigns Contact Form" <${smtpUser}>`,
      replyTo: email,
      to: 'hello@devdesigns.net',
      subject: `[Verified Contact Inquiry] ${service}: ${subject}`,
      text: `New Verified Contact Inquiry\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #1e293b; border-radius: 16px; background-color: #0f172a; color: #f8fafc;">
          <h2 style="color: #38bdf8; margin-top: 0;">New Verified Inquiry</h2>
          <div style="padding: 16px; background-color: #1e293b; border-radius: 12px; margin-bottom: 20px;">
            <p style="margin: 6px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
            <p style="margin: 6px 0;"><strong>Service Requested:</strong> ${service}</p>
            <p style="margin: 6px 0;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin: 6px 0; font-size: 11px; color: #10b981;">🛡️ Anti-Spam Verification Passed (Score: ${spamCheck.score}/100)</p>
          </div>
          <div style="padding: 16px; background-color: #1e293b; border-radius: 12px;">
            <h4 style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</h4>
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `
    };

    let emailSent = false;
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('[Contact API] Verified email delivered:', info.messageId);
      emailSent = true;
    } catch (mailErr) {
      console.warn('[Contact API] Primary SMTP delivery timed out or failed:', mailErr);
      console.log(`[Contact Inquiry Recorded] Name: ${name} | Email: ${email} | Service: ${service} | Subject: ${subject}`);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! We will get back to you shortly.',
        delivered: emailSent
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
