import { Request, Response } from 'express';
import { AIService } from '../services/ai.service';

export const getDomainSuggestions = async (req: Request, res: Response) => {
    try {
        const { query } = req.query;
        if (!query || typeof query !== 'string') {
            res.status(400).json({ error: 'Query is required' });
            return;
        }
        const domains = await AIService.suggestDomains(query);
        res.json(domains);
    } catch (error) {
        console.error('Domain Suggestion Error:', error);
        res.status(500).json({ error: 'Failed to get domain suggestions' });
    }
};

export const handleChat = async (req: Request, res: Response) => {
    try {
        const { message, history } = req.body;
        if (!message) {
            res.status(400).json({ error: 'Message is required' });
            return;
        }
        const response = await AIService.chatSupport(message, history || []);
        res.json({ response });
    } catch (error) {
        console.error('Chat AI Error:', error);
        res.status(500).json({ error: 'Failed to chat with AI' });
    }
};

export const blogAssist = async (req: Request, res: Response) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            res.status(400).json({ error: 'Prompt is required' });
            return;
        }
        const result = await AIService.blogAssist(prompt);
        res.json(result);
    } catch (error) {
        console.error('Blog Assist AI Error:', error);
        res.status(500).json({ error: 'Failed to get blog assistance' });
    }
};

export const generateDetail = async (req: Request, res: Response) => {
    try {
        const { context } = req.body;
        if (!context) {
            res.status(400).json({ error: 'Context is required' });
            return;
        }
        const result = await AIService.generateDetail(context);
        res.json(result);
    } catch (error) {
        console.error('Generate Detail AI Error:', error);
        res.status(500).json({ error: 'Failed to generate details' });
    }
};
