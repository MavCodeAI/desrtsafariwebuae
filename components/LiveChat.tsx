'use client';

import { useEffect } from 'react';

interface LiveChatProps {
  tawkToPropertyId?: string;
  tawkToKey?: string;
}

export default function LiveChat({ tawkToPropertyId, tawkToKey }: LiveChatProps) {
  useEffect(() => {
    // Only initialize if valid IDs are provided
    if (!tawkToPropertyId || !tawkToKey || tawkToPropertyId === 'YOUR_PROPERTY_ID') {
      return;
    }

    // Tawk.to Live Chat Integration
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${tawkToPropertyId}/${tawkToKey}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [tawkToPropertyId, tawkToKey]);

  return null;
}
