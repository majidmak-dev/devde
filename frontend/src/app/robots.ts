import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/client-dashboard/', '/admin-dashboard/'],
        },
        sitemap: 'https://devdesigns.net/sitemap.xml',
    };
}
