import { Request, Response } from 'express';
import { ImageService } from '../services/image.service';

export const searchImages = async (req: Request, res: Response): Promise<void> => {
    try {
        const { query, limit } = req.query;
        if (!query || typeof query !== 'string') {
            res.status(400).json({ error: 'Query parameter is required' });
            return;
        }

        const images = await ImageService.searchImages(query, limit ? parseInt(limit as string) : 10);
        res.json(images);
    } catch (error) {
        console.error('Search Images Controller Error:', error);
        res.status(500).json({ error: 'Failed to search images' });
    }
};

export const searchVideos = async (req: Request, res: Response): Promise<void> => {
    try {
        const { query, limit } = req.query;
        if (!query || typeof query !== 'string') {
            res.status(400).json({ error: 'Query parameter is required' });
            return;
        }

        const videos = await ImageService.searchVideos(query, limit ? parseInt(limit as string) : 5);
        res.json(videos);
    } catch (error) {
        console.error('Search Videos Controller Error:', error);
        res.status(500).json({ error: 'Failed to search videos' });
    }
};
