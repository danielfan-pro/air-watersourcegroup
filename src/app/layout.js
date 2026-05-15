import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | Geothermal Distribution for Northeast HVAC Contractors`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "geothermal distributor",
    "geothermal wholesale",
    "Northeast HVAC contractor supplier",
    "heat pump distributor",
    "sustainable energy equipment",
    "B2B HVAC wholesale",
  ],
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: `${siteConfig.shortName} | Geothermal Distribution for Northeast HVAC Contractors`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 2048,
        height: 877,
        alt: `${siteConfig.shortName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | Geothermal Distribution for Northeast HVAC Contractors`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
