import Footer from '@/components/Footer';
import Header from '@/components/Header';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Script from 'next/script';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: {
    template: '%s - FOREFRONT Charity',
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
        'text-forefront-text scrollbar-forefront antialiased',
        montserrat.variable,
      )}
    >
      <Script
        src='https://widgets.givebutter.com/latest.umd.cjs?acct=PxZ0zWSrlOm5hxLl&p=other'
        strategy='afterInteractive'
      />

      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
