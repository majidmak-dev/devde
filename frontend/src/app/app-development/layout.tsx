import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Premium Mobile App Development | iOS & Android Ecosystems',
    description: 'Native and hybrid mobile application development for scaling businesses. We build high-performance, intuitive apps that drive engagement and business growth.',
    keywords: 'Mobile App Development, iOS App Development, Android App Development, Hybrid App Solutions, Native Mobile Apps, App Store Optimization, Mobile UX Design'
};

export default function AppDevLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
