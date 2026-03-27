import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Strategic Digital Case Studies | Proven Results & Impact',
    description: 'Deep dives into our most ambitious projects. See how DevDesigns transforms business visions into world-class digital realities through strategic engineering and design.',
    keywords: 'Digital Case Studies, Business Impact, Strategic Engineering, Design Transformation, Software Case Studies, Project Success Stories'
};

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
