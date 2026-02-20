import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | End-to-End Digital Solutions',
    description: 'Explore our suite of enterprise services from UI/UX design to high-performance cloud hosting.'
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
