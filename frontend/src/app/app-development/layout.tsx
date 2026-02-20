import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'App Development | Native & Hybrid Mobile Solutions',
    description: 'Premium mobile application development for iOS and Android ecosystems.'
};

export default function AppDevLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
