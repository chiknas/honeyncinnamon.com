import { MobileMaxWidth, MainMaxWidth } from 'components/Layout/Layout';
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
  bodyMaxWidth: string;
};

export default function useViewport(): Viewport {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  });
  const [isMobile, setIsMobile] = useState(
    windowDimensions.width <= mobileViewportWidthThreashold
  );
  const [bodyMaxWidth, setBodyMaxWidth] = useState(
    isMobile ? MobileMaxWidth : MainMaxWidth
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      setIsMobile(windowDimensions.width <= mobileViewportWidthThreashold);
      setBodyMaxWidth(isMobile ? MobileMaxWidth : MainMaxWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, windowDimensions.width]);

  return {
    windowDimensions,
    isMobile,
    bodyMaxWidth,
  };
}
