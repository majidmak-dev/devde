import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Portfolio | World-Class Digital Showcase',
    description: 'A curated selection of our most impactful digital architecture and design projects.'
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
