import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar";
import FooterComponent from "@/components/footer";
import Chatbot from "@/components/chatbot";
import { InteractionProvider } from "@/components/interaction-provider";
import Preloader from "@/components/preloader";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'DevDesigns | Enterprise Digital Infrastructure & Design',
    template: '%s | DevDesigns'
  },
  description: 'DevDesigns provides world-class UI/UX, Web & App Development, High-Performance Hosting, and Domain Management solutions for scaling businesses.',
  keywords: 'Enterprise Digital Infrastructure, UI/UX Design Modern, High-Performance Web Development, Scalable Mobile Apps, Managed Cloud Hosting, SEO Growth Strategy',
  openGraph: {
    title: 'DevDesigns | Premium Digital Infrastructure',
    description: 'Transform your vision into world-class digital reality.',
    url: 'https://devdesigns.net',
    siteName: 'DevDesigns',
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: "nBZWi-6Z1b9kVVcHpW_UUd8a1qCQijOIChD_VSnqVYo",
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning={true}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-6PXL01XDVC`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6PXL01XDVC');
          `}
        </Script>
      </head>
      <body
        className={`${geistMono.variable} antialiased font-sans`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          <InteractionProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <FooterComponent />
              <Chatbot />
              <Toaster position="bottom-right" toastOptions={{
                duration: 4000,
                style: {
                  background: '#0f172a',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  letterSpacing: '0.025em',
                  textTransform: 'uppercase'
                },
              }} />
            </div>
          </InteractionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
