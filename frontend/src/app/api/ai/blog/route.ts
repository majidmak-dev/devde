import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: Request) {
    try {
        const { prompt } = await request.json();

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }

        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "You are a professional tech blogger. Generate a catchy title and a 3-point outline for a blog post based on the user's topic. Return in JSON format with 'title' and 'outline' fields."
                },
                { role: "user", content: prompt }
            ],
            response_format: { type: "json_object" }
        });

        return NextResponse.json(JSON.parse(response.choices[0].message.content || '{}'));
    } catch (error) {
        console.error('Blog AI Error:', error);
        return NextResponse.json({ error: 'Failed to get blog assistance' }, { status: 500 });
    }
}
