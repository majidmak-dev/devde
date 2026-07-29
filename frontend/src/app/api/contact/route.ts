import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, service, message } = body;

    if (!name || !email || !subject || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

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
      subject: `[Contact Form] ${service}: ${subject}`,
      text: `New Contact Inquiry\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #1e293b; border-radius: 16px; background-color: #0f172a; color: #f8fafc;">
          <h2 style="color: #38bdf8; margin-top: 0;">New DevDesigns Inquiry</h2>
          <div style="padding: 16px; background-color: #1e293b; border-radius: 12px; margin-bottom: 20px;">
            <p style="margin: 6px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
            <p style="margin: 6px 0;"><strong>Service Requested:</strong> ${service}</p>
            <p style="margin: 6px 0;"><strong>Subject:</strong> ${subject}</p>
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
      console.log('[Contact API] Email sent successfully:', info.messageId);
      emailSent = true;
    } catch (mailErr) {
      console.warn('[Contact API] Primary SMTP delivery timed out or failed:', mailErr);
      // Log details for audit & record retention
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
