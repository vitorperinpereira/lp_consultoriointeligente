import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google"; // Playfair for the luxury italic feel
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "GMV | Inteligência Artificial e Alta Performance para Dentistas",
  description: "A GMV transforma seu consultório odontológico com soluções de IA, processos validados e tecnologia de ponta. Aumente seu faturamento e recupere seu tempo.",
  keywords: "IA para dentistas, gestão odontológica, automação clínica, marketing para dentistas, GMV educação",
  openGraph: {
    title: "GMV | Inteligência Artificial e Alta Performance para Dentistas",
    description: "Transforme seu consultório em um modelo de alta lucratividade com IA.",
    url: "https://vitorperin.com.br", // Assuming the final domain based on owner
    siteName: "GMV Educação",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} ${playfair.variable} antialiased bg-[#0A0A0A]`}
      >
        {children}
      </body>
    </html>
  );
}

