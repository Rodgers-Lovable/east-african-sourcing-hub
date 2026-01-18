import { useEffect, useRef } from 'react';
import { trackScrollDepth, trackInsight } from '@/lib/umami';

interface ScrollTrackingOptions {
  /** Type of page for scroll tracking */
  type: 'brokerage' | 'origin' | 'insight';
  /** Origin slug (required for origin type) */
  origin?: string;
  /** Post title (required for insight type) */
  postTitle?: string;
}

/**
 * Hook to track scroll depth on long-form pages
 * Tracks 50% and 75% scroll depth
 */
export const useScrollTracking = (options: ScrollTrackingOptions): void => {
  const tracked50 = useRef(false);
  const tracked75 = useRef(false);

  useEffect(() => {
    // Reset tracking on mount/options change
    tracked50.current = false;
    tracked75.current = false;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (window.scrollY / scrollHeight) * 100;

      // Track 50% scroll
      if (!tracked50.current && scrollPercent >= 50) {
        tracked50.current = true;
        
        switch (options.type) {
          case 'brokerage':
            trackScrollDepth.brokerage50();
            break;
          case 'origin':
            if (options.origin) {
              trackScrollDepth.origin50(options.origin);
            }
            break;
          // 50% not tracked for insights (only 75%)
        }
      }

      // Track 75% scroll
      if (!tracked75.current && scrollPercent >= 75) {
        tracked75.current = true;
        
        switch (options.type) {
          case 'brokerage':
            trackScrollDepth.brokerage75();
            break;
          case 'origin':
            if (options.origin) {
              trackScrollDepth.origin75(options.origin);
            }
            break;
          case 'insight':
            if (options.postTitle) {
              trackInsight.scroll75(options.postTitle);
            }
            break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [options.type, options.origin, options.postTitle]);
};
