import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Web Development | High-End Web Applications',
    description: 'Scalable, high-performance web applications built with cutting-edge technology.'
};

export default function WebDevLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
