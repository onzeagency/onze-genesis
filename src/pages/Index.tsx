import { useState } from 'react';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import DreamyParticles from '@/components/DreamyParticles';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="min-h-screen bg-background relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {isLoading && <Loader onComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <>
          <Navigation />
          
          {/* Main Content */}
          <main className="relative z-10 min-h-screen">
            <DreamyParticles mouse={mouse} />
            
            {showContent && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  {/* Content goes here */}
                </div>
              </div>
            )}
          </main>
        </>
      )}
    </div>
  );
};
export default Index;