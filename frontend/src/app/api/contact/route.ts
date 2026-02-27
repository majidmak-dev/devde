import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { name, email, subject, service, message } = data;

        if (!name || !email || !subject || !service || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.ethereal.email',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER || 'placeholder@example.com',
                pass: process.env.SMTP_PASS || 'placeholder_pass'
            },
            tls: { rejectUnauthorized: false }
        });

        const mailOptions = {
            from: `"DevDesigns Contact Form" <${process.env.SMTP_USER}>`,
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
        return NextResponse.json({ success: true, message: 'Message sent successfully' });
    } catch (error: any) {
        console.error('Contact Form Route Error:', error);
        return NextResponse.json({ error: error.message || 'Failed to send message' }, { status: 500 });
    }
}
