import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalplat.org"),
  title: {
    default: "DigitalPlat | Open infrastructure, in production.",
    template: "%s | DigitalPlat",
  },
  description:
    "DigitalPlat builds and operates open-access systems for domains, DNS, and developer infrastructure used by hundreds of thousands of users globally.",
  applicationName: "DigitalPlat",
  keywords: [
    "DigitalPlat",
    "open infrastructure",
    "DNS",
    "domain infrastructure",
    "developer infrastructure",
    "nonprofit infrastructure",
    "FreeDomain",
    "OpenSource.ngo",
  ],
  openGraph: {
    title: "DigitalPlat | Open infrastructure, in production.",
    description:
      "DigitalPlat builds and operates open-access systems for domains, DNS, and developer infrastructure used by hundreds of thousands of users globally.",
    url: "https://digitalplat.org",
    siteName: "DigitalPlat",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalPlat | Open infrastructure, in production.",
    description:
      "DigitalPlat builds and operates open-access systems for domains, DNS, and developer infrastructure used by hundreds of thousands of users globally.",
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
