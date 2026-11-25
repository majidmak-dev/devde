import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Elite Project Portfolio | 22+ Enterprise Digital Creations',
    description: 'Explore 22+ production web applications, AI SaaS platforms, mobile apps, zero-trust security systems, and UI/UX design systems engineered by DevDesigns.',
    keywords: 'DevDesigns Portfolio, Next.js 15 Projects, SaaS Builder Portfolio, AI Travel Platform, HIPAA Telemedicine App, Enterprise Cloud Migration, Power Platform Portfolio',
    alternates: { canonical: 'https://devdesigns.net/portfolio' },
    openGraph: {
        title: 'DevDesigns Portfolio | 22+ Enterprise Digital Creations',
        description: 'Production web apps, AI SaaS platforms, zero-trust architectures, and design systems built for industry leaders.',
        url: 'https://devdesigns.net/portfolio',
        siteName: 'DevDesigns',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DevDesigns Portfolio | Enterprise Digital Creations',
        description: 'Explore 22+ production web, AI, SaaS, cloud, and security projects by DevDesigns.',
    },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
