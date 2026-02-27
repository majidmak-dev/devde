"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleContactForm = void 0;
const email_service_1 = require("../services/email.service");
const handleContactForm = async (req, res) => {
    try {
        const { name, email, subject, service, message } = req.body;
        if (!name || !email || !subject || !service || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
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
