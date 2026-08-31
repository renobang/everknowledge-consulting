import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'EverKnowledge Consulting | Systems, ERP/SAP & Data Analytics',
  description: 'International consulting in information systems integration, database management, ERP/SAP, and data analytics led by Dr. Chris Bang.',
  openGraph: {
    title: 'EverKnowledge Consulting',
    description: 'Connecting Systems. Clarifying Data. Improving Decisions.',
    images: [{ url: '/og.png', width: 1732, height: 909, alt: 'EverKnowledge Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EverKnowledge Consulting',
    description: 'Connecting Systems. Clarifying Data. Improving Decisions.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
