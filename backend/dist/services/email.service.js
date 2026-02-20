"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    // Using a placeholder configuration. In a real environment, 
    // these would be populated via environment variables.
    host: process.env.SMTP_HOST || 'smtp.ethereal.email',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER || 'placeholder@example.com',
        pass: process.env.SMTP_PASS || 'placeholder_pass'
    },
    tls: {
        rejectUnauthorized: false
    }
});
const sendContactEmail = async (data) => {
    const mailOptions = {
        from: `"${data.name}" <${data.email}>`,
        to: 'hello@devdesigns.net',
        subject: `[Contact Form] ${data.subject}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #10b981;">New Contact Inquiry</h2>
                <p><strong>From:</strong> ${data.name} (${data.email})</p>
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
    }
    catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
exports.sendContactEmail = sendContactEmail;
