import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Digital Shop | Premium Assets & Plugins',
    description: 'A curated marketplace of elite digital assets, from UI kits to infrastructure plugins.'
};

export default function MarketplaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
