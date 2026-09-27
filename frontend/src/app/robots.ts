import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const aiUserAgents = [
        'Googlebot',
        'Bingbot',
        'YandexBot',
        'Baiduspider',
        'Slurp',
        'DuckAssistBot',
        'GPTBot',
        'ChatGPT-User',
        'PerplexityBot',
        'ClaudeBot',
        'Anthropic-ai',
        'Google-Extended',
        'Bytespider',
        'Bytespider-User',
        'Applebot-Extended',
        'Applebot',
        'Amazonbot',
        'Meta-ExternalAgent',
        'YouBot',
        'CCBot',
        'cohere-ai',
        'Omgilibot',
        'Diffbot'
    ];

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/client-dashboard/', '/admin-dashboard/'],
            },
            ...aiUserAgents.map(ua => ({
                userAgent: ua,
                allow: '/',
                disallow: ['/client-dashboard/', '/admin-dashboard/'],
            })),
            {
                userAgent: 'Mediapartners-Google',
                allow: '/',
            }
        ],
        sitemap: 'https://devdesigns.net/sitemap.xml',
    };
}

