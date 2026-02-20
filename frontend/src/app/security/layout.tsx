import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Digital Security | Shielding Your Enterprise Assets',
    description: 'Advanced cybersecurity and infrastructure protection for the modern digital era.'
};

export default function SecurityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
