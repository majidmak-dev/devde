"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDetail = exports.blogAssist = exports.handleChat = exports.getDomainSuggestions = void 0;
const ai_service_1 = require("../services/ai.service");
const getDomainSuggestions = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query || typeof query !== 'string') {
            res.status(400).json({ error: 'Query is required' });
            return;
        }
        const domains = await ai_service_1.AIService.suggestDomains(query);
        res.json(domains);
    }
    catch (error) {
        console.error('Domain Suggestion Error:', error);
        res.status(500).json({ error: 'Failed to get domain suggestions' });
    }
};
exports.getDomainSuggestions = getDomainSuggestions;
const handleChat = async (req, res) => {
    try {
        const { message, history } = req.body;
        if (!message) {
            res.status(400).json({ error: 'Message is required' });
            return;
        }
        const response = await ai_service_1.AIService.chatSupport(message, history || []);
        res.json({ response });
    }
    catch (error) {
        console.error('Chat AI Error:', error);
        res.status(500).json({ error: 'Failed to chat with AI' });
    }
};
exports.handleChat = handleChat;
const blogAssist = async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            res.status(400).json({ error: 'Prompt is required' });
            return;
        }
        const result = await ai_service_1.AIService.blogAssist(prompt);
        res.json(result);
    }
    catch (error) {
        console.error('Blog Assist AI Error:', error);
        res.status(500).json({ error: 'Failed to get blog assistance' });
    }
};
exports.blogAssist = blogAssist;
const generateDetail = async (req, res) => {
    try {
        const { context } = req.body;
        if (!context) {
            res.status(400).json({ error: 'Context is required' });
            return;
        }
        const result = await ai_service_1.AIService.generateDetail(context);
        res.json(result);
    }
    catch (error) {
        console.error('Generate Detail AI Error:', error);
        res.status(500).json({ error: 'Failed to generate details' });
    }
};
exports.generateDetail = generateDetail;
