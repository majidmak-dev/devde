import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SEO & Growth Strategy | Data-Driven Organic Visibility',
    description: 'Scalable growth strategies, high-impact SEO audits, and conversion rate optimization for enterprise platforms. Dominate your market with DevDesigns.',
    keywords: 'SEO Growth Strategy, Technical SEO Audit, Organic Visibility, Conversion Rate Optimization, Growth Analytics, Market Positioning, Search Engine Dominance'
};

export default function SEOGrowthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
