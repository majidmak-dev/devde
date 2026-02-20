import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const limit = parseInt(searchParams.get('limit') || '5');

    if (!query) {
        return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
    }

    const { PEXELS_API_KEY } = process.env;

    try {
        if (!PEXELS_API_KEY) return NextResponse.json([]);
        const response = await fetch(`https://api.pexels.com/videos/search?query=${encodeURIComponent(query)}&per_page=${limit}`, {
            headers: { Authorization: PEXELS_API_KEY }
        });
        const data = await response.json();
        const videos = (data.videos || []).map((v: any) => ({
            id: `pexels-vid-${v.id}`,
            url: v.video_files.find((f: any) => f.quality === 'hd')?.link || v.video_files[0].link,
            image: v.image,
            user: v.user.name,
            source: 'pexels'
        }));
        return NextResponse.json(videos);
    } catch (error) {
        console.error('Video search error:', error);
        return NextResponse.json({ error: 'Failed to search videos' }, { status: 500 });
    }
}
