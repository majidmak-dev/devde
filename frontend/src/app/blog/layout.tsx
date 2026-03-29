import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'DevDesigns Blog | Insights on Web Development, Design & Cloud Infrastructure',
    description: 'Expert articles on Next.js, React, TypeScript, Kubernetes, Docker, UI/UX design, API security, and SEO growth. Published by the DevDesigns engineering team.',
    keywords: 'web development blog, Next.js tutorial, React server components, TypeScript patterns, Kubernetes guide, Docker best practices, UI UX design trends, API security, SEO growth strategy, cloud infrastructure',
    authors: [{ name: 'DevDesigns Team', url: 'https://devdesigns.net/about' }],
    alternates: { canonical: 'https://devdesigns.net/blog' },
    openGraph: {
        title: 'DevDesigns Blog | Expert Engineering & Design Insights',
        description: 'Deep-dive articles on modern web architecture, cloud infrastructure, and design systems — written by practitioners for practitioners.',
        url: 'https://devdesigns.net/blog',
        siteName: 'DevDesigns',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DevDesigns Blog | Expert Engineering & Design Insights',
        description: 'Deep-dive articles on modern web architecture, cloud infrastructure, and design systems.',
        site: '@devdesigns',
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
