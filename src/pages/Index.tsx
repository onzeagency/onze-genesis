import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import DreamyParticles from '@/components/DreamyParticles';
import xiLogoMain from '@/assets/xi-logo-main.png';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div className="bg-background relative" onMouseMove={handleMouseMove}>
      {isLoading && <Loader onComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <>
          <Navigation activeSection="home" />
          
          {/* Hero Section with Particles */}
          <section className="relative min-h-screen flex items-center justify-center">
            <DreamyParticles mouse={mouse} />
            
            {/* Main XI Logo */}
            <div className="relative z-10 flex items-center justify-center">
              <img 
                src={xiLogoMain} 
                alt="XI" 
                className="w-96 h-96 object-contain animate-pulse-glow"
              />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Index;