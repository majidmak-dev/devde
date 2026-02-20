import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UI/UX Design | Emotion-Driven User Experiences',
    description: 'Premium user interface and experience design for high-impact digital products.'
};

export default function UIUXLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
