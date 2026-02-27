import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { name, email, subject, service, message } = data;

        if (!name || !email || !subject || !service || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Normalize environment variables (strip literal quotes if present)
        const smtpHost = (process.env.SMTP_HOST || 'smtp.ethereal.email').replace(/^"(.*)"$/, '$1');
        const smtpPort = Number((process.env.SMTP_PORT || '587').replace(/^"(.*)"$/, '$1'));
        const smtpUser = (process.env.SMTP_USER || '').replace(/^"(.*)"$/, '$1');
        const smtpPass = (process.env.SMTP_PASS || '').replace(/^"(.*)"$/, '$1');
        const smtpSecure = (process.env.SMTP_SECURE || 'false').replace(/^"(.*)"$/, '$1') === 'true';

        console.log('Attempting to send email via:', {
            host: smtpHost,
            port: smtpPort,
            secure: smtpSecure,
            user: smtpUser
        });

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
            }
        });

        const mailOptions = {
            from: `"DevDesigns Contact Form" <${smtpUser}>`,
            replyTo: email,
            to: 'hello@devdesigns.net',
            subject: `[Contact Form] ${service}: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #10b981;">New Contact Inquiry</h2>
                    <p><strong>From:</strong> ${name} (${email})</p>
                    <p><strong>Service:</strong> ${service}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <hr style="border: 0; border-top: 1px solid #eee;" />
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('Contact form email sent successfully');
        return NextResponse.json({ success: true, message: 'Message sent successfully' });
    } catch (error: any) {
        console.error('Contact Form Route Error:', {
            message: error.message,
            stack: error.stack,
            code: error.code,
            command: error.command
        });
        return NextResponse.json({
            error: 'Failed to send message',
            details: error.message || 'Internal Server Error'
        }, { status: 500 });
    }
}
