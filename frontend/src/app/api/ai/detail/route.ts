export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: Request) {
    try {
        const { context } = await request.json();

        if (!context) {
            return NextResponse.json({ error: 'Context is required' }, { status: 400 });
        }

        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: `You are an Expert Technical Sales Lead at DevDesigns. Based on the provided context (a service name, asset, or strategy), generate a high-impact, technically authoritative analysis.
                    
                    Structure:
                    - Title: High-impact and professional.
                    - Content: A technical deep-dive. Use **bolding** for keywords. Incorporate technical specifications and strategic value.
                    - Next Steps: Actionable roadmap items.
                    
                    Tone: Professional, elite, visionary.
                    Return ONLY a JSON object with 'title', 'content' (markdown supported), and 'nextSteps' (array of strings) fields.`
                },
                { role: "user", content: `Context: ${context}` }
            ],
            response_format: { type: "json_object" }
        });

        return NextResponse.json(JSON.parse(response.choices[0].message.content || '{}'));
    } catch (error) {
        console.error('Detail AI Error:', error);
        return NextResponse.json({ error: 'Failed to generate details' }, { status: 500 });
    }
}
