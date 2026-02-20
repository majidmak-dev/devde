import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Start Your Digital Project',
    description: 'Connect with our digital architects to discuss your next-generation infrastructure.'
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
