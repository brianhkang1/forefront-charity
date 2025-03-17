import Footer from '@/components/Footer';
import Header from '@/components/Header';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Libre_Baskerville, Montserrat } from 'next/font/google';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
});

export const metadata: Metadata = {
  title: {
    template: '%s | FOREFRONT Charity',
    default: 'FOREFRONT Charity',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={clsx(
        'text-forefront-text antialiased',
        montserrat.variable,
        libreBaskerville.variable,
      )}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
