import Footer from '@/components/Footer';
import Header from '@/components/Header';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

import './globals.css';

// If loading a variable font, you don't need to specify the font weight
const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
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
      className={clsx('text-forefront-text antialiased', mulish.variable)}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
