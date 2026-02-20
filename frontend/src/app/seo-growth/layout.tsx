import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SEO & Growth | Data-Driven Organic Visibility',
    description: 'Scalable growth strategies and high-impact SEO audits for enterprise platforms.'
};

export default function SEOGrowthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
