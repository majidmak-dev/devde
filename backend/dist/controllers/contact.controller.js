"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleContactForm = void 0;
const email_service_1 = require("../services/email.service");
const anti_spam_1 = require("../utils/anti-spam");
const handleContactForm = async (req, res) => {
    try {
        const { name, email, subject, service, message, website_hp, company_fax_hp, formLoadedAt } = req.body;
        if (!name || !email || !subject || !service || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const clientIp = req.headers['x-forwarded-for']?.split(',')[0].trim() ||
            req.socket.remoteAddress ||
            'unknown';
        const spamCheck = (0, anti_spam_1.evaluateAntiSpam)({
            name,
            email,
            subject,
            service,
            message,
            website_hp,
            company_fax_hp,
            formLoadedAt: formLoadedAt ? Number(formLoadedAt) : undefined
        }, clientIp);
        if (spamCheck.isRateLimited) {
            console.warn(`[Backend AntiSpam] Rate limit exceeded for IP: ${clientIp} / Email: ${email}`);
            return res.status(429).json({ error: 'Rate limit exceeded. Please wait a few moments before trying again.' });
        }
        if (spamCheck.isSpam) {
            console.warn(`[Backend AntiSpam Intercepted] Reason: ${spamCheck.reason} | Score: ${spamCheck.score} | IP: ${clientIp} | Email: ${email}`);
            // Silent honeypot acknowledgment
            return res.status(200).json({ success: true, message: 'Message received successfully' });
        }
        await (0, email_service_1.sendContactEmail)({ name, email, subject, service, message });
        res.status(200).json({ success: true, message: 'Message sent successfully' });
    }
    catch (error) {
        console.error('Contact Form Controller Error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
};
exports.handleContactForm = handleContactForm;
