import { useState, useEffect } from 'react';

const mobileViewportWidthThreashold = 768;

type WindowDimensions = { width: number; height: number };

function getWindowDimensions(): WindowDimensions {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

type Viewport = {
  windowDimensions: WindowDimensions;
  isMobile: boolean;
};

export default function useViewport(): Viewport {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    windowDimensions,
    ...{ isMobile: windowDimensions.width <= mobileViewportWidthThreashold },
  };
}
