import { useState, useEffect } from 'react';

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTransform = (speed: number = 0.5) => {
    return {
      transform: `translate3d(0, ${scrollY * speed}px, 0)`,
    };
  };

  const getOpacity = (start: number = 0, end: number = 1) => {
    const progress = Math.min(Math.max(scrollY / window.innerHeight, 0), 1);
    return start + (end - start) * progress;
  };

  return { scrollY, getTransform, getOpacity };
};