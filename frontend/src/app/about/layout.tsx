import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About DevDesigns | 140+ Enterprise Digital Systems Shipped',
    description: 'Meet the architects behind DevDesigns — an enterprise digital engineering agency with 140+ systems shipped, <100ms global edge latency, 99.99% uptime SLA, and native AEO/GEO search engineering.',
    keywords: 'About DevDesigns, Majid Desk, Enterprise Digital Engineering Firm, Next.js 15 Agency, AEO GEO Experts, Zero Trust Security, Power Platform Architects',
    alternates: { canonical: 'https://devdesigns.net/about' },
    openGraph: {
        title: 'About DevDesigns | Engineering the Future of Digital Infrastructure',
        description: '140+ enterprise systems shipped, <100ms global edge latency, and 99.99% uptime SLA. Meet our engineering, security, AI, and design leadership.',
        url: 'https://devdesigns.net/about',
        siteName: 'DevDesigns',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About DevDesigns | Enterprise Digital Engineering',
        description: '140+ enterprise systems shipped with <100ms global edge latency and 99.99% uptime SLA.',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
