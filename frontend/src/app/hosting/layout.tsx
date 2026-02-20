import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Managed Hosting | High-Performance Cloud Infrastructure',
    description: 'Elite hosting solutions with 99.9% uptime and AI-powered maintenance engines.'
};

export default function HostingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
