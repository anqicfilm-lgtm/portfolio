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
  metadataBase: new URL('https://producer-portfolio-2026.red-chub-7563.chatgpt.site'),
  title: 'Anqi Chen — Creative Producer & Writer',
  description: 'Creative producer and writer working across short-form, vertical drama, live action and emerging technology.',
  openGraph: {
    title: 'Anqi Chen — Creative Producer & Writer',
    description: 'Storytelling · Vertical drama · Short films · Emerging technology',
    images: ['/assets/anqi-chen.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anqi Chen — Creative Producer & Writer',
    description: 'Storytelling · Vertical drama · Short films · Emerging technology',
    images: ['/assets/anqi-chen.jpg'],
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
