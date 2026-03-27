import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About DevDesigns | Engineering the Future of Digital Infrastructure',
    description: 'Learn about DevDesigns, a premier digital engineering firm specializing in enterprise-grade web, app, and SaaS solutions. Discover our mission to empower scaling businesses.',
    keywords: 'About DevDesigns, Digital Engineering Firm, Enterprise Solutions, Scaling Businesses, Software Development Experts'
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
