import { useEffect } from 'react';
import { gsap } from 'gsap';
import { useViewport } from 'hooks/useViewport';

export const useSideNavigationTimeline = (containerRef, options) => {
  const { isMobile } = useViewport();

  useEffect(() => {
    const sidebar = containerRef.current;

    if (!sidebar || isMobile !== false) {
      return;
    }

    let currentTimeline;

    setTimeout(() => {
      currentTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          endTrigger: '#footer_nav',
          scrub: 0.5,
          pin: sidebar,
          invalidateOnRefresh: true,
          ...options,
        },
      });
    }, 20);

    return () => {
      if (currentTimeline) {
        currentTimeline.scrollTrigger.kill();
        currentTimeline.kill();
      }
    };
  }, [containerRef, isMobile]);
};
