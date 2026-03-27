import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Elite SaaS Development | Multi-Tenant Platform Architecture',
    description: 'Scalable SaaS infrastructure designed for global reach and recurring revenue. We build multi-tenant platforms with high availability and security.',
    keywords: 'SaaS Development, Multi-Tenant Architecture, SaaS Infrastructure, Cloud-Native SaaS, Subscription Platforms, Scalable SaaS Solutions'
};

export default function SaaSLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
