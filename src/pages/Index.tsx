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

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {isLoading && <Loader onComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <>
          <Navigation />
          
          {/* Main Content */}
          <main className="relative z-10 min-h-screen">
            <ParticleBackground />
            
            {showContent && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center animate-fadeInUp">
                  {/* XI Logo will be placed here when you provide the file */}
                  <div className="w-32 h-32 mx-auto mb-8 border-2 border-dashed border-primary/50 rounded-full flex items-center justify-center">
                    <span className="font-tech text-sm text-muted-foreground">XI Logo</span>
                  </div>
                  
                  <h2 className="font-tech text-2xl glow-text mb-4">
                    Underground Techno Agency
                  </h2>
                  
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Experience the underground. Feel the rhythm. Join the movement.
                  </p>
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
