import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
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
          src={`https://www.googletagmanager.com/gtag/js?id=524682603`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '524682603');
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
            </div>
          </InteractionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
