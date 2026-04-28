import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Comparateur Internet 2025 : Meilleures Offres Box & Mobile",
  description:
    "Comparez toutes les offres internet en France : Orange, Free, SFR, Bouygues. Trouvez la meilleure box et forfait mobile selon votre région.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Comparateur Internet France - Meilleures Offres 2025",
    description:
      "Comparez toutes les offres internet en France : Orange, Free, SFR, Bouygues. Trouvez la meilleure box et forfait mobile selon votre région.",
    url: "https://comparateur-internet.fr",
    siteName: "Comparateur Internet France",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-[#0f172a]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
