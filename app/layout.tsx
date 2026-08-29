import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export const metadata: Metadata = {
  title: {
    default: 'YNot Solutions · Brunei\'s Digital Transformation Partner',
    template: '%s · YNot Solutions',
  },
  description:
    'YNot Solutions drives Brunei\'s digital transformation with AI, IoT, and web technology, aligned with Wawasan 2035. Silicon Valley mindset, local heart.',
  keywords: [
    'YNot Solutions',
    'Brunei tech',
    'web development',
    'mobile apps',
    'AI',
    'IoT',
    'digital transformation',
    'Wawasan 2035',
  ],
  openGraph: {
    title: 'YNot Solutions · Brunei\'s Digital Transformation Partner',
    description:
      'We build scalable digital products, AI-powered systems, and IoT solutions for Brunei businesses.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
