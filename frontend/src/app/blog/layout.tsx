import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'DevDesigns Blog | Insights on Engineering, Design & Growth',
    description: 'Stay updated with the latest trends in web development, app engineering, UI/UX design, and SEO growth strategies. Expert insights from the DevDesigns team.',
    keywords: 'Engineering Blog, Design Trends, Web Development Insights, Tech Growth Strategies, Software Development Blog'
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
