import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enterprise Web Development | Scalable Full-Stack Solutions',
    description: 'DevDesigns builds high-performance, secure, and SEO-optimized enterprise web applications. Scalable architecture powered by Next.js, Node.js, and Cloud Infrastructure.',
    keywords: 'Enterprise Web Development, Full-Stack Web Apps, Next.js Development, Scalable Web Architecture, Custom Software Solutions, High-Performance Web Apps'
};

export default function WebDevLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
