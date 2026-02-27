export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: Request) {
    try {
        const { message, history } = await request.json();

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: `You are the Lead Digital Architect at DevDesigns, an elite world-class enterprise digital infrastructure and design agency. 
                    Your goal is to provide extremely accurate, technically deep, and professional advice. 
                    Context: DevDesigns specializes in:
                    1. UI/UX Design: World-class, immersive experiences.
                    2. Web & App Development: Enterprise-grade, high-performance applications (Next.js, Postgres, Prisma, OpenAI).
                    3. Security: "Fortress" level protection, Zero Trust, E2EE, and Predictive Maintenance.
                    4. Hosting: Digital Sovereignty, Global Edge, 99.999% Uptime.
                    
                    Guidelines:
                    - Be professional, authoritative, and concise.
                    - Use technical terms appropriately (Zero Trust, Sovereignty, Latency, etc.).
                    - Support markdown formatting: Use **bolding**, lists, and headers to structure complex info.
                    - If asked about specific implementation, provide high-level technical roadmaps.`
                },
                ...(history || []),
                { role: "user", content: message }
            ]
        });

        return NextResponse.json({ response: response.choices[0].message.content });
    } catch (error) {
        console.error('Chat AI Error:', error);
        return NextResponse.json({ error: 'Failed to chat with AI' }, { status: 500 });
    }
}
