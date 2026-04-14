import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tools.3vo.ai"),
  title: "Automation Workflow Templates — n8n & Make Templates for SMBs",
  description: "Ready-to-import n8n and Make workflow templates for small businesses. Automate lead capture, invoicing, social scheduling, and more. No developer needed.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Automation Workflow Templates — n8n & Make Templates for SMBs",
    description: "Ready-to-import n8n and Make workflow templates for small businesses. Automate lead capture, invoicing, social scheduling, and more. No developer needed.",
    url: "https://tools.3vo.ai",
    siteName: "Automation Workflow Templates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation Workflow Templates — n8n & Make Templates for SMBs",
    description: "Ready-to-import n8n and Make workflow templates for small businesses. Automate lead capture, invoicing, social scheduling, and more. No developer needed.",
  },
};

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}

        {/* Google Analytics 4 */}
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_ID}');
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel */}
        {META_PIXEL_ID && (
          <Script id="meta-pixel-init" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
