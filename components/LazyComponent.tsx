'use client';

import { Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function LazyComponent({ 
  children, 
  fallback 
}: LazyComponentProps) {
  const defaultFallback = (
    <div className="flex items-center justify-center p-8">
      <LoadingSpinner />
    </div>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  );
}
