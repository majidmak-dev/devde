import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Seamless Infrastructure Maintenance | 24/7 Reliability Engineering',
    description: 'Ensure your digital platforms remain online and optimized. DevDesigns provides 24/7 monitoring, security patching, and core performance tuning for scaling enterprises.',
    keywords: 'Infrastructure Maintenance, Reliability Engineering, 24/7 Monitoring, Security Patching, Performance Tuning, Uptime Guarantee, Managed Services'
};

export default function MaintenanceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
