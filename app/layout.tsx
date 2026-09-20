import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#121110",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://solifacet.com"),
  title: {
    default: "Solifacet — Curated Fine Jewelry & Precious Stones",
    template: "%s | Solifacet",
  },
  description:
    "A curated marketplace for authenticated fine jewelry and certified precious stones. Direct provenance, verified sellers, and escrow-protected acquisitions. Every facet, verified.",
  applicationName: "Solifacet",
  authors: [{ name: "Solifacet", url: "https://solifacet.com" }],
  creator: "Solifacet",
  publisher: "Solifacet",
  keywords: [
    "fine jewelry marketplace",
    "certified gemstones",
    "authenticated fine jewelry",
    "precious stones",
    "natural diamonds",
    "colored gemstones",
    "escrow jewelry acquisition",
    "verified jewelry sellers",
    "estate jewelry",
    "gemstone provenance",
    "quiet luxury",
    "Solifacet",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Solifacet — Curated Fine Jewelry & Precious Stones",
    description:
      "A curated marketplace for authenticated fine jewelry and certified precious stones. Verified sellers, direct provenance, and escrow-protected transactions. Every facet, verified.",
    url: "https://solifacet.com",
    siteName: "Solifacet",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Solifacet — Every facet, verified.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solifacet — Curated Fine Jewelry & Precious Stones",
    description:
      "A curated online marketplace for fine jewelry and precious stones. Every facet, verified.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/og-image.png" }],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://solifacet.com/#organization",
      "name": "Solifacet",
      "url": "https://solifacet.com",
      "logo": "https://solifacet.com/icon.svg",
      "slogan": "Every facet, verified.",
      "description":
        "A curated online marketplace for authenticated fine jewelry and precious stones.",
      "knowsAbout": [
        "Fine Jewelry",
        "Precious Stones",
        "Gemstone Authentication",
        "Jewelry Provenance",
        "Escrow Protection",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://solifacet.com/#website",
      "url": "https://solifacet.com",
      "name": "Solifacet",
      "description":
        "Curated online marketplace for fine jewelry and precious stones.",
      "publisher": {
        "@id": "https://solifacet.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#121110] text-[#F3F0EA] antialiased selection:bg-[#C9A876] selection:text-[#121110]">
        {children}
      </body>
    </html>
  );
}
