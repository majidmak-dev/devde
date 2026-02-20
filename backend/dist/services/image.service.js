"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
class ImageService {
    static PEXELS_KEY = process.env.PEXELS_API_KEY;
    static UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY;
    static async searchImages(query, limit = 10) {
        const [pexelsResults, unsplashResults] = await Promise.all([
            this.searchPexels(query, Math.ceil(limit / 2)),
            this.searchUnsplash(query, Math.ceil(limit / 2))
        ]);
        return [...pexelsResults, ...unsplashResults].slice(0, limit);
    }
    static async searchPexels(query, limit) {
        try {
            if (!this.PEXELS_KEY)
                return [];
            const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${limit}`, {
                headers: { Authorization: this.PEXELS_KEY }
            });
            const data = await response.json();
            return (data.photos || []).map((p) => ({
                id: `pexels-${p.id}`,
                url: p.src.large,
                thumbnail: p.src.medium,
                alt: p.alt || query,
                photographer: p.photographer,
                source: 'pexels'
            }));
        }
        catch (error) {
            console.error('Pexels API Error:', error);
            return [];
        }
    }
    static async searchUnsplash(query, limit) {
        try {
            if (!this.UNSPLASH_KEY)
                return [];
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${limit}`, {
                headers: { Authorization: `Client-ID ${this.UNSPLASH_KEY}` }
            });
            const data = await response.json();
            return (data.results || []).map((p) => ({
                id: `unsplash-${p.id}`,
                url: p.urls.regular,
                thumbnail: p.urls.small,
                alt: p.alt_description || query,
                photographer: p.user.name,
                source: 'unsplash'
            }));
        }
        catch (error) {
            console.error('Unsplash API Error:', error);
            return [];
        }
    }
    static async searchVideos(query, limit = 5) {
        try {
            if (!this.PEXELS_KEY)
                return [];
            const response = await fetch(`https://api.pexels.com/videos/search?query=${encodeURIComponent(query)}&per_page=${limit}`, {
                headers: { Authorization: this.PEXELS_KEY }
            });
            const data = await response.json();
            return (data.videos || []).map((v) => ({
                id: `pexels-vid-${v.id}`,
                url: v.video_files.find((f) => f.quality === 'hd')?.link || v.video_files[0].link,
                image: v.image,
                user: v.user.name,
                source: 'pexels'
            }));
        }
        catch (error) {
            console.error('Pexels Video API Error:', error);
            return [];
        }
    }
}
exports.ImageService = ImageService;
