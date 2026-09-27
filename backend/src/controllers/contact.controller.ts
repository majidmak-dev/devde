import { Request, Response } from 'express';
import { sendContactEmail } from '../services/email.service';
import { evaluateAntiSpam } from '../utils/anti-spam';

export const handleContactForm = async (req: Request, res: Response) => {
    try {
        const { name, email, subject, service, message, website_hp, company_fax_hp, formLoadedAt } = req.body;

        if (!name || !email || !subject || !service || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const clientIp = 
            (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() ||
            req.socket.remoteAddress ||
            'unknown';

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

        if (spamCheck.isRateLimited) {
            console.warn(`[Backend AntiSpam] Rate limit exceeded for IP: ${clientIp} / Email: ${email}`);
            return res.status(429).json({ error: 'Rate limit exceeded. Please wait a few moments before trying again.' });
        }

        if (spamCheck.isSpam) {
            console.warn(`[Backend AntiSpam Intercepted] Reason: ${spamCheck.reason} | Score: ${spamCheck.score} | IP: ${clientIp} | Email: ${email}`);
            // Silent honeypot acknowledgment
            return res.status(200).json({ success: true, message: 'Message received successfully' });
        }

        await sendContactEmail({ name, email, subject, service, message });

        res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Contact Form Controller Error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
};
