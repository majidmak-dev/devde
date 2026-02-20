import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Digital Architects & Innovators',
    description: 'Learn about the visionaries behind DevDesigns and our mission to build elite digital infrastructure.'
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
