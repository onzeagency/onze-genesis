import { useState } from 'react';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };
  return <div className="min-h-screen bg-background relative overflow-hidden">
      {isLoading && <Loader onComplete={handleLoadingComplete} />}
      
      {!isLoading && <>
          <Navigation />
          
          {/* Main Content */}
          <main className="relative z-10 min-h-screen">
            <ParticleBackground />
            
            {showContent && <div className="absolute inset-0 flex items-center justify-center">
                
              </div>}
          </main>
        </>}
    </div>;
};
export default Index;