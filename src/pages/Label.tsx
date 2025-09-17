import { useState } from 'react';
import Navigation from '@/components/Navigation';

const Label = () => {
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
      <Navigation activeSection="label" />
      
      {/* Label Section */}
      <section className="min-h-screen bg-gradient-to-b from-card to-background flex items-center justify-center py-20 pt-32">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-hardrace text-primary mb-8 glow-text">
              Label
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              ONZE est plus qu'un label, c'est un mouvement. Nous soutenons les artistes 
              underground et créons des expériences musicales authentiques qui repoussent les limites.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
                <h3 className="text-2xl font-tech text-primary mb-4">Notre Vision</h3>
                <p className="text-muted-foreground">
                  Promouvoir la créativité sans limites et soutenir les artistes émergents 
                  dans leur développement artistique.
                </p>
              </div>
              <div className="bg-background border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
                <h3 className="text-2xl font-tech text-primary mb-4">Nos Services</h3>
                <p className="text-muted-foreground">
                  Production, distribution, promotion et accompagnement personnalisé 
                  pour chaque artiste de notre roster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Label;