import { useEffect, useState } from 'react';

const Viewport = {
  desktop: 'desktop',
  mobile: 'mobile',
  tablet: 'tablet',
};

export const getViewport = () => {
  const mediaQueryMobile = window.matchMedia(`(max-width: 767px)`);
  const mediaQueryTablet = window.matchMedia(`(max-width: 1024px)`);

  if (mediaQueryMobile.matches) {
    return Viewport.mobile;
  }

  if (mediaQueryTablet.matches) {
    return Viewport.tablet;
  }

  return Viewport.desktop;
};

export const useViewport = () => {
  const [currentViewPort, setCurrentViewport] = useState(null);

  useEffect(() => {
    const resize = () => {
      setCurrentViewport(getViewport());
    };

    resize();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return {
    isDesktop:
      currentViewPort != null ? currentViewPort === Viewport.desktop : null,
    isTablet:
      currentViewPort != null ? currentViewPort === Viewport.tablet : null,
    isMobile:
      currentViewPort != null ? currentViewPort === Viewport.mobile : null,
  };
};
