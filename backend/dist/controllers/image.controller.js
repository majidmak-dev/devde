"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchVideos = exports.searchImages = void 0;
const image_service_1 = require("../services/image.service");
const searchImages = async (req, res) => {
    try {
        const { query, limit } = req.query;
        if (!query || typeof query !== 'string') {
            res.status(400).json({ error: 'Query parameter is required' });
            return;
        }
        const images = await image_service_1.ImageService.searchImages(query, limit ? parseInt(limit) : 10);
        res.json(images);
    }
    catch (error) {
        console.error('Search Images Controller Error:', error);
        res.status(500).json({ error: 'Failed to search images' });
    }
};
exports.searchImages = searchImages;
const searchVideos = async (req, res) => {
    try {
        const { query, limit } = req.query;
        if (!query || typeof query !== 'string') {
            res.status(400).json({ error: 'Query parameter is required' });
            return;
        }
        const videos = await image_service_1.ImageService.searchVideos(query, limit ? parseInt(limit) : 5);
        res.json(videos);
    }
    catch (error) {
        console.error('Search Videos Controller Error:', error);
        res.status(500).json({ error: 'Failed to search videos' });
    }
};
exports.searchVideos = searchVideos;
