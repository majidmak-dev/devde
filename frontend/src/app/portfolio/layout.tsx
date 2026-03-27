import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Elite Project Portfolio | World-Class Digital Creations',
    description: 'Explore our portfolio of high-performance web applications, mobile apps, and premium UI/UX designs. Experience the DevDesigns standard of excellence.',
    keywords: 'Digital Portfolio, Web Development Portfolio, App Development Projects, UI/UX Design Portfolio, Case Studies, Software Engineering Projects'
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
