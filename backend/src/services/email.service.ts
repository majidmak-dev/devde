import nodemailer from 'nodemailer';

// Normalize environment variables (strip literal quotes if present)
const smtpHost = (process.env.SMTP_HOST || 'smtp.ethereal.email').replace(/^"(.*)"$/, '$1');
const smtpPort = Number((process.env.SMTP_PORT || '587').replace(/^"(.*)"$/, '$1'));
const smtpUser = (process.env.SMTP_USER || '').replace(/^"(.*)"$/, '$1');
const smtpPass = (process.env.SMTP_PASS || '').replace(/^"(.*)"$/, '$1');
const smtpSecure = (process.env.SMTP_SECURE || 'false').replace(/^"(.*)"$/, '$1') === 'true';

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

interface ContactMailData {
    name: string;
    email: string;
    subject: string;
    service: string;
    message: string;
}

export const sendContactEmail = async (data: ContactMailData) => {
    const mailOptions = {
        from: `"DevDesigns Contact Form" <${process.env.SMTP_USER || 'hello@devdesigns.net'}>`,
        replyTo: data.email,
        to: 'hello@devdesigns.net',
        subject: `[Contact Form] ${data.service}: ${data.subject}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\n\nMessage:\n${data.message}`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #10b981;">New Contact Inquiry</h2>
                <p><strong>From:</strong> ${data.name} (${data.email})</p>
                <p><strong>Service:</strong> ${data.service}</p>
                <p><strong>Subject:</strong> ${data.subject}</p>
                <hr style="border: 0; border-top: 1px solid #eee;" />
                <p style="white-space: pre-wrap;">${data.message}</p>
            </div>
        `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
