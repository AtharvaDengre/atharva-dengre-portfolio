import type { Metadata } from 'next';
import { Outfit, Archivo_Black, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Atharva Dengre — SAP S/4HANA MM Consultant | S2P & P2P | MDG & Agentic AI Specialist',
  description:
    'Portfolio of Atharva Dengre - SAP S/4HANA MM Consultant at IBM with 2.8+ years experience in Source-to-Pay (S2P), Procure-to-Pay (P2P), Master Data Governance (MDG), SAP Activate, WRICEF, and Agentic AI solutions for SAP.',
  keywords: [
    'Atharva Dengre',
    'SAP S/4HANA',
    'SAP MM',
    'S2P',
    'P2P',
    'SAP MDG',
    'WRICEF',
    'LSMW',
    'Migration Cockpit',
    'Ariba CIG',
    'IBM Consultant',
    'Agentic AI',
    'SAP GenAI Hub',
    'watsonx',
    'SAP Joule',
  ],
  openGraph: {
    title: 'Atharva Dengre — SAP S/4HANA MM & AI Consultant',
    description:
      'SAP MM & MDG Consultant at IBM delivering Source-to-Pay (S2P) & Procure-to-Pay (P2P) operations at 99.8% SLA across 50,000+ monthly transactions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${archivoBlack.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="bg-bg-dark text-text-main font-sans relative antialiased selection:bg-accent-red selection:text-black">
        {children}
      </body>
    </html>
  );
}
