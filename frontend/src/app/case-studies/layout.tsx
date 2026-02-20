import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Success Stories | Enterprise Digital Transformation',
    description: 'Deep dives into how we solve complex infrastructure challenges for global scaling businesses.'
};

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
