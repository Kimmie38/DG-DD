import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LightboxProvider } from "@/components/Lightbox";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import { person, heroPhoto } from "@/content/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${person.name} — ${person.role}`,
    template: `%s · ${person.name}`,
  },
  description: person.intro,
  openGraph: {
    title: person.name,
    description: person.tagline,
    images: [{ url: heroPhoto.src, width: heroPhoto.width, height: heroPhoto.height, alt: heroPhoto.alt }],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#15803d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <LightboxProvider>
          <span id="top-of-page" />
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <ScrollAnimator />
        </LightboxProvider>
      </body>
    </html>
  );
}
