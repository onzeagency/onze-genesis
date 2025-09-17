import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import CyberBackground from '@/components/CyberBackground';
import TechnoGrid from '@/components/TechnoGrid';
import GlitchText from '@/components/GlitchText';
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
    <CyberBackground>
      <div className="bg-background relative min-h-screen" onMouseMove={handleMouseMove}>
        {isLoading && <Loader onComplete={handleLoadingComplete} />}
        
        {!isLoading && (
          <>
            <Navigation activeSection="home" />
            
            {/* Hero Section with Cyber Effects */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              <TechnoGrid className="z-0" />
              
              {/* Main XI Logo */}
              <div className="relative z-20 flex flex-col items-center justify-center space-y-8">
                <div className="relative">
                  <img 
                    src={xiLogoMain} 
                    alt="XI" 
                    className="w-96 h-96 object-contain animate-cyber-pulse"
                    style={{
                      filter: 'drop-shadow(0 0 30px hsl(312 100% 50% / 0.8))'
                    }}
                  />
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ background: 'var(--gradient-cyber)' }} />
                </div>
                
                {/* Underground label */}
                <div className="text-center space-y-2">
                  <GlitchText 
                    text="UNDERGROUND" 
                    className="text-4xl font-tech font-bold glow-text"
                  />
                  <div className="w-32 h-px bg-primary mx-auto opacity-60" />
                  <p className="text-muted-foreground font-tech tracking-[0.3em] text-sm">
                    TECHNO • EXPERIENCE • COLLECTIVE
                  </p>
                </div>
              </div>
              
              {/* Floating cyber elements */}
              <div className="absolute top-20 left-20 animate-matrix">
                <div className="w-1 h-20 bg-primary opacity-20" />
              </div>
              <div className="absolute bottom-20 right-20 animate-matrix" style={{ animationDelay: '2s' }}>
                <div className="w-1 h-16 bg-primary opacity-15" />
              </div>
            </section>
          </>
        )}
      </div>
    </CyberBackground>
  );
};

export default Index;