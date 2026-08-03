import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import {
  Barlow_Condensed,
  IBM_Plex_Mono,
  Source_Sans_3,
} from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host")?.split(",")[0];
  const host = forwardedHost?.trim() || requestHeaders.get("host") || "localhost:3000";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto")?.split(",")[0];
  const protocol = forwardedProtocol?.trim() || (host.startsWith("localhost") ? "http" : "https");
  const origin = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", origin).toString();

  return {
    metadataBase: origin,
    title: {
      default: "Le Danjoli Dog Training",
      template: "%s | Le Danjoli",
    },
    description:
      "Purposeful obedience, puppy development, manwork and protection training built around the dog in front of you.",
    openGraph: {
      title: "Le Danjoli Dog Training",
      description:
        "Purposeful dog training for everyday life, early development and working-dog goals.",
      type: "website",
      siteName: "Le Danjoli Dog Training",
      images: [
        {
          url: socialImage,
          width: 1731,
          height: 909,
          alt: "Le Danjoli Dog Training — Train the dog in front of you.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Le Danjoli Dog Training",
      description:
        "Purposeful dog training for everyday life, early development and working-dog goals.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}
    >
      <body>
        <div className="site-shell">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
