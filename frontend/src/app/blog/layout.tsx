import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Insights & News | Technology & Design Blog',
    description: 'Expert perspectives on the future of digital infrastructure, AI, and enterprise design.'
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
