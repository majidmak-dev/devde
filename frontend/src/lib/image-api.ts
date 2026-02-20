export interface ImageResult {
    id: string;
    url: string;
    thumbnail: string;
    alt: string;
    photographer: string;
    source: 'pexels' | 'unsplash';
}

const API_BASE = 'http://localhost:5001/api';

export async function fetchImages(query: string, limit: number = 10): Promise<ImageResult[]> {
    try {
        const response = await fetch(`${API_BASE}/images/search?query=${encodeURIComponent(query)}&limit=${limit}`);
        if (!response.ok) throw new Error('Failed to fetch images');
        return await response.json();
    } catch (error) {
        console.error('Image Fetch Error:', error);
        return [];
    }
}

export interface VideoResult {
    id: string;
    url: string;
    image: string;
    user: string;
    source: string;
}

export async function fetchVideos(query: string, limit: number = 5): Promise<VideoResult[]> {
    try {
        const response = await fetch(`${API_BASE}/images/videos/search?query=${encodeURIComponent(query)}&limit=${limit}`);
        if (!response.ok) throw new Error('Failed to fetch videos');
        return await response.json();
    } catch (error) {
        console.error('Video Fetch Error:', error);
        return [];
    }
}
