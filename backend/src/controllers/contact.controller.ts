import { Request, Response } from 'express';
import { sendContactEmail } from '../services/email.service';

export const handleContactForm = async (req: Request, res: Response) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        await sendContactEmail({ name, email, subject, message });

        res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Contact Form Controller Error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
};
