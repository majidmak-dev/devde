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
import JsonLd from "@/components/json-ld";

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
  keywords: 'Enterprise Digital Infrastructure, UI/UX Design Modern, High-Performance Web Development, Scalable Mobile Apps, Managed Cloud Hosting, SEO Growth Strategy, Generative Engine Optimization, GEO, AEO, Answer Engine Optimization',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'DevDesigns | Premium Digital Infrastructure',
    description: 'Transform your vision into world-class digital reality.',
    url: 'https://devdesigns.net',
    siteName: 'DevDesigns',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevDesigns | Premium Digital Infrastructure',
    description: 'Transform your vision into world-class digital reality.',
  },
  verification: {
    google: "nBZWi-6Z1b9kVVcHpW_UUd8a1qCQijOIChD_VSnqVYo",
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  alternates: {
    canonical: 'https://devdesigns.net',
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
        <JsonLd />
        {/* AdSense: must be raw tag in SSR head for Google crawler to detect it */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9460255466960810"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistMono.variable} antialiased font-sans`}
        suppressHydrationWarning={true}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white font-bold"
        >
          Skip to main content
        </a>
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
              <main id="main-content" className="flex-1">{children}</main>
              <FooterComponent />
              <Chatbot />
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
