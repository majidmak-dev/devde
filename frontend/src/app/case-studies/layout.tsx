import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Strategic Digital Case Studies | 15 Verified Client Deployments',
    description: 'Explore 15 in-depth engineering case studies with verified ROI metrics: +312% organic traffic via GEO/AEO, 99.999% cloud uptime, 92% PowerApps process reduction, and 3.8x conversion lift.',
    keywords: 'DevDesigns Case Studies, GEO AEO Case Study, HIPAA Telemedicine SaaS, Multi-Tenant SaaS Case Study, PowerApps Automation ROI, Zero-Downtime Cloud Migration',
    alternates: { canonical: 'https://devdesigns.net/case-studies' },
    openGraph: {
        title: 'DevDesigns Case Studies | Verified Enterprise Impact',
        description: '15 technical case studies detailing architecture, challenges, solutions, and measurable ROI across SaaS, AI, Web, Cloud, and Power Platform.',
        url: 'https://devdesigns.net/case-studies',
        siteName: 'DevDesigns',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DevDesigns Case Studies | Verified Enterprise Impact',
        description: '15 technical case studies with verified performance, security, and revenue ROI.',
    },
};

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
