import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#d4af37] mb-4">404</h1>
          <h2 className="text-4xl font-bold text-white mb-6">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The page you&apos;re looking for seems to have wandered off into the
            desert. Let&apos;s get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button
              size="lg"
              className="bg-[#d4af37] hover:bg-[#f4d03f] text-[#1a1a2e] font-bold"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
          <Link href="/packages">
            <Button
              size="lg"
              variant="outline"
              className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a2e]"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              View Packages
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
