'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="w-24 h-24 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <AlertTriangle className="w-12 h-12 text-[#d4af37]" />
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-4">Oops!</h1>
        <h2 className="text-3xl font-bold text-[#d4af37] mb-6">
          Something went wrong
        </h2>
        
        <p className="text-xl text-gray-300 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => reset()}
            size="lg"
            className="bg-[#d4af37] hover:bg-[#f4d03f] text-[#1a1a2e] font-bold"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
          
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a2e] w-full"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-[#1a1a2e]/50 rounded-lg border border-[#d4af37]/20">
          <p className="text-sm text-gray-400">
            Error Reference: {error.digest || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}
