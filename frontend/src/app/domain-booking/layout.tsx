import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Domain Booking | Secure Your Digital Identity',
    description: 'Intelligent domain search and brand protection powered by AI strategist.'
};

export default function DomainBookingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
