"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIService = void 0;
const openai_1 = __importDefault(require("openai"));
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
class AIService {
    static async suggestDomains(query) {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "You are a branding expert. Suggest 5 creative, catchy, and available-sounding domain names based on the user's keywords. Return ONLY a JSON array of strings (the domain names with extensions like .com, .io, .tech)."
                },
                {
                    role: "user",
                    content: `Keywords: ${query}`
                }
            ],
            response_format: { type: "json_object" }
        });
        const content = response.choices[0].message.content;
        if (!content)
            return [];
        try {
            const parsed = JSON.parse(content);
            return parsed.domains || parsed.suggestions || Object.values(parsed)[0];
        }
        catch (e) {
            console.error('Error parsing AI response:', e);
            return [];
        }
    }
    static async chatSupport(message, history) {
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
                ...history,
                { role: "user", content: message }
            ]
        });
        return response.choices[0].message.content;
    }
    static async blogAssist(prompt) {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "You are a professional tech blogger. Generate a catchy title and a 3-point outline for a blog post based on the user's topic. Return in JSON format with 'title' and 'outline' fields."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            response_format: { type: "json_object" }
        });
        return JSON.parse(response.choices[0].message.content || '{}');
    }
    static async generateDetail(context) {
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
                {
                    role: "user",
                    content: `Context: ${context}`
                }
            ],
            response_format: { type: "json_object" }
        });
        return JSON.parse(response.choices[0].message.content || '{}');
    }
}
exports.AIService = AIService;
