import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enterprise Digital Security | Proactive Threat Mitigation',
    description: 'Secure your digital future with enterprise-grade security protocols. Penetration testing, vulnerability assessment, and proactive threat mitigation by DevDesigns experts.',
    keywords: 'Digital Security, Cybersecurity, Penetration Testing, Threat Mitigation, Vulnerability Assessment, Enterprise Security, Data Protection'
};

export default function SecurityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
