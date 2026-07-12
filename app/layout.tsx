import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

const siteTitle = "Peter Adedokun | Product & Frontend Engineer";
const siteDescription =
  "Product-focused frontend engineer building premium React, Next.js, and TypeScript products for startups, agencies, and global clients.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Peter Adedokun",
  },
  description: siteDescription,
  applicationName: "Peter Adedokun Portfolio",
  keywords: [
    "Peter Adedokun",
    "Product Engineer",
    "Frontend Engineer",
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Lagos Product Engineer",
    "Lagos Frontend Engineer",
    "Remote Frontend Engineer",
    "Freelance React Developer",
    "Portfolio Website",
  ],
  authors: [{ name: "Peter Adedokun" }],
  creator: "Peter Adedokun",
  publisher: "Peter Adedokun",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Peter Adedokun Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Peter Adedokun product and frontend engineer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

// No-flash theme bootstrap — runs before paint to apply persisted theme.
// Default is light; only adds the `dark` class when the user has opted in.
const themeInitScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark') document.documentElement.classList.add('dark');
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Peter Adedokun",
    jobTitle: "Product & Frontend Engineer",
    description: siteDescription,
    url: siteUrl,
    email: "mailto:peteradedokun167@gmail.com",
    telephone: "+2349167647648",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: [
      "https://github.com/PeterAdedokun1",
      "https://linkedin.com/in/peter-adedokun/",
      "http://dolearnn.com/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Product Engineering",
      "Frontend Engineering",
      "UI Development",
      "Web Performance",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Peter Adedokun Portfolio",
    url: siteUrl,
    description: siteDescription,
    inLanguage: "en",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
