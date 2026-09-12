import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "King Cartões | Gráfica no Vale do Paraíba",
  description:
    "Cartões de visita, banners, panfletos, placas e imãs com impressão profissional e entrega em até 48h no Vale do Paraíba.",
  keywords: [
    "gráfica Vale do Paraíba",
    "cartão de visita",
    "banners",
    "panfletos",
    "placas",
    "King Cartões",
  ],
  openGraph: {
    title: "King Cartões | Gráfica no Vale do Paraíba",
    description:
      "Impressão profissional com entrega rápida no Vale do Paraíba. Peça seu orçamento.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-ink font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
