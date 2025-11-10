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
  openGraph: {
    title: 'Dubai Desert Safari | Premium Desert Adventures',
    description:
      'Experience the magic of Dubai Desert with unforgettable desert adventures',
    type: 'website',
  },
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
