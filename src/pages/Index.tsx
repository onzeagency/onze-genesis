import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import DreamyParticles from '@/components/DreamyParticles';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const location = useLocation();

  // Only show loading on the main page
  const isMainPage = location.pathname === '/';

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
      {isMainPage && isLoading && <Loader onComplete={handleLoadingComplete} />}
      
      {(isMainPage ? !isLoading : true) && (
        <>
          <Navigation />
          
          {/* Main Content */}
          <main className="relative z-0 min-h-screen">
            {isMainPage && <DreamyParticles mouse={mouse} />}
            
            {/* Only show this content on main page after loading */}
            {isMainPage && showContent && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
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