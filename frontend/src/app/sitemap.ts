import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://devdesigns.net';

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        { url: `${baseUrl}/services`, lastModified: new Date() },
        { url: `${baseUrl}/portfolio`, lastModified: new Date() },
        { url: `${baseUrl}/case-studies`, lastModified: new Date() },
        { url: `${baseUrl}/blog`, lastModified: new Date() },
        { url: `${baseUrl}/hosting`, lastModified: new Date() },
        { url: `${baseUrl}/domain-booking`, lastModified: new Date() },
        { url: `${baseUrl}/security`, lastModified: new Date() },
        { url: `${baseUrl}/seo-growth`, lastModified: new Date() },
        { url: `${baseUrl}/marketplace`, lastModified: new Date() },
        { url: `${baseUrl}/pricing`, lastModified: new Date() },
        { url: `${baseUrl}/ui-ux-design`, lastModified: new Date() },
        { url: `${baseUrl}/web-development`, lastModified: new Date() },
        { url: `${baseUrl}/app-development`, lastModified: new Date() },
        { url: `${baseUrl}/saas-development`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        { url: `${baseUrl}/privacy`, lastModified: new Date() },
        { url: `${baseUrl}/terms`, lastModified: new Date() },
        { url: `${baseUrl}/resources`, lastModified: new Date() },
        { url: `${baseUrl}/client-login`, lastModified: new Date() },
    ];
}
