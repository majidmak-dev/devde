import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Elite UI/UX Design | Emotion-Driven User Experiences',
    description: 'World-class user interface and experience design. We create stunning, high-conversion digital products that resonate with users and define brands.',
    keywords: 'UI/UX Design, User Experience Research, Interface Design, Visual Identity, Design Systems, Strategic UX Audit, High-Conversion Design'
};

export default function UIUXLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
