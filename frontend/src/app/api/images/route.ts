export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const limit = parseInt(searchParams.get('limit') || '10');

    if (!query) {
        return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
    }

    const { PEXELS_API_KEY, UNSPLASH_ACCESS_KEY } = process.env;

    try {
        const [pexelsResults, unsplashResults] = await Promise.all([
            PEXELS_API_KEY ? fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${Math.ceil(limit / 2)}`, { headers: { Authorization: PEXELS_API_KEY } }).then(res => res.json()).catch(() => ({ photos: [] })) : Promise.resolve({ photos: [] }),
            UNSPLASH_ACCESS_KEY ? fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${Math.ceil(limit / 2)}`, { headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` } }).then(res => res.json()).catch(() => ({ results: [] })) : Promise.resolve({ results: [] })
        ]);

        const pImages = (pexelsResults.photos || []).map((p: { id: string | number, src: { large: string, medium: string }, alt?: string, photographer: string }) => ({
            id: `pexels-${p.id}`, url: p.src.large, thumbnail: p.src.medium, alt: p.alt || query, photographer: p.photographer, source: 'pexels'
        }));

        const uImages = (unsplashResults.results || []).map((p: { id: string, urls: { regular: string, small: string }, alt_description?: string, user: { name: string } }) => ({
            id: `unsplash-${p.id}`, url: p.urls.regular, thumbnail: p.urls.small, alt: p.alt_description || query, photographer: p.user.name, source: 'unsplash'
        }));

        const images = [...pImages, ...uImages].slice(0, limit);
        return NextResponse.json(images);
    } catch (error: unknown) {
        console.error('Image search error:', error);
        return NextResponse.json({ error: 'Failed to search images' }, { status: 500 });
    }
}
