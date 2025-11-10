import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import LiveChat from '@/components/LiveChat';

export const metadata: Metadata = {
  title: 'Dubai Desert Safari | Premium Desert Adventures',
  description:
    'Experience the magic of Dubai Desert with unforgettable desert adventures including dune bashing, camel riding, and gourmet BBQ dinners. Book your premium safari today!',
  keywords:
    'Dubai desert safari, desert tour, dune bashing, camel riding, desert camp, BBQ dinner, overnight safari, morning safari, Dubai tourism',
  authors: [{ name: 'Desert Safari UAE' }],
  creator: 'Desert Safari UAE',
  publisher: 'Desert Safari UAE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://desrtsafariwebuae.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dubai Desert Safari | Premium Desert Adventures',
    description:
      'Experience the magic of Dubai Desert with unforgettable desert adventures',
    url: 'https://desrtsafariwebuae.com',
    siteName: 'Desert Safari UAE',
    images: [
      {
        url: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
        width: 1200,
        height: 630,
        alt: 'Dubai Desert Safari',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dubai Desert Safari | Premium Desert Adventures',
    description: 'Experience the magic of Dubai Desert with unforgettable desert adventures',
    images: ['https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: '#d4af37',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        <LiveChat 
          tawkToPropertyId="YOUR_PROPERTY_ID" 
          tawkToKey="YOUR_KEY" 
        />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
