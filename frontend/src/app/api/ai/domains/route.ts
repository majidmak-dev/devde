import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    if (!query) return NextResponse.json({ error: 'Query is required' }, { status: 400 });

    try {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a branding expert. Suggest 5 creative, catchy, and available-sounding domain names based on the user's keywords. Return ONLY a JSON array of strings (the domain names with extensions like .com, .io, .tech)." },
                { role: "user", content: `Keywords: ${query}` }
            ],
            response_format: { type: "json_object" }
        });

        const content = response.choices[0].message.content;
        if (!content) return NextResponse.json([]);
        const parsed = JSON.parse(content);
        return NextResponse.json(parsed.domains || parsed.suggestions || Object.values(parsed)[0]);
    } catch (error) {
        console.error('Domain Suggestion Error:', error);
        return NextResponse.json({ error: 'Failed to get domain suggestions' }, { status: 500 });
    }
}
