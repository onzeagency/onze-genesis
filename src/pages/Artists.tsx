import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import DreamyParticles from '@/components/DreamyParticles';
import xiLogoMain from '@/assets/xi-logo-main.png';

const Artists = () => {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div className="bg-background relative min-h-screen" onMouseMove={handleMouseMove}>
      <Navigation activeSection="artists" />
      
      {/* Artists Section */}
      <section className="min-h-screen bg-gradient-to-b from-background to-card flex items-center justify-center py-20 pt-32">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-hardrace text-primary mb-8 glow-text">
              Artists
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Découvrez nos artistes talentueux qui définissent l'avenir de la musique underground. 
              Chaque artiste apporte sa vision unique à notre collectif.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
                <h3 className="text-2xl font-tech text-primary mb-4">Artiste 1</h3>
                <p className="text-muted-foreground">Description de l'artiste...</p>
              </div>
              <div className="bg-background border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
                <h3 className="text-2xl font-tech text-primary mb-4">Artiste 2</h3>
                <p className="text-muted-foreground">Description de l'artiste...</p>
              </div>
              <div className="bg-background border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
                <h3 className="text-2xl font-tech text-primary mb-4">Artiste 3</h3>
                <p className="text-muted-foreground">Description de l'artiste...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artists;