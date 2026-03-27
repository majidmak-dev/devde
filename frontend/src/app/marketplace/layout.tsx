import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Digital Marketplace | Premium Templates, UI Kits & Scripts',
    description: 'Accelerate your development with premium Next.js templates, Figma UI kits, and production-ready scripts. Curated high-performance digital assets for modern creators.',
    keywords: 'Digital Marketplace, Next.js Templates, UI Kits, Figma Assets, Development Scripts, SaaS Templates, Web Design Assets, Code Marketplace'
};

export default function MarketplaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
