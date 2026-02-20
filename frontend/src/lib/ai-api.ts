const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.devdesigns.net';
const API_BASE = `${API_URL}/api`;

export async function fetchDomainSuggestions(query: string): Promise<string[]> {
    try {
        const response = await fetch(`${API_BASE}/ai/domains?query=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Failed to fetch suggestions');
        return await response.json();
    } catch (error) {
        console.error('AI Domain Suggestion Error:', error);
        return [];
    }
}

export async function sendChatMessage(message: string, history: { role: string, content: string }[]): Promise<string> {
    try {
        const response = await fetch(`${API_BASE}/ai/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, history }),
        });
        if (!response.ok) throw new Error('Failed to send chat message');
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('AI Chat Error:', error);
        return "I'm sorry, I'm having trouble connecting right now.";
    }
}

export async function fetchBlogAssist(prompt: string): Promise<{ title: string, outline: string[] }> {
    try {
        const response = await fetch(`${API_BASE}/ai/blog-assist`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt }),
        });
        if (!response.ok) throw new Error('Failed to fetch blog assistance');
        return await response.json();
    } catch (error) {
        console.error('AI Blog Assist Error:', error);
        return { title: '', outline: [] };
    }
}

export interface AiDetailResult {
    title: string;
    content: string;
    nextSteps: string[];
}

export async function fetchAiDetail(context: string): Promise<AiDetailResult> {
    try {
        const response = await fetch(`${API_BASE}/ai/detail`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ context }),
        });
        if (!response.ok) throw new Error('Failed to fetch AI details');
        return await response.json();
    } catch (error) {
        console.error('AI Detail Fetch Error:', error);
        return { title: 'Information Error', content: 'Failed to load details.', nextSteps: [] };
    }
}
