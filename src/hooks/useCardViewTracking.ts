import { useEffect, useRef } from 'react';
import { trackHomeOriginCard } from '@/lib/umami';

type Origin = 'kenya' | 'ethiopia' | 'uganda';

/**
 * Hook to track when origin cards come into view
 * Uses Intersection Observer for efficient viewport detection
 */
export const useCardViewTracking = (
  origin: Origin,
  elementRef: React.RefObject<HTMLElement>
): void => {
  const hasTracked = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasTracked.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            trackHomeOriginCard.view(origin);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // Track when 50% visible
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [origin, elementRef]);
};
