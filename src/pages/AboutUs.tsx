import Navigation from '@/components/Navigation';
import DreamyParticles from '@/components/DreamyParticles';
import { useState } from 'react';

const AboutUs = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="min-h-screen bg-background relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <Navigation />
      
      <main className="relative z-0 min-h-screen">
        <DreamyParticles mouse={mouse} />
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="text-center max-w-4xl px-8">
            <h1 className="text-6xl font-hardrace text-primary mb-8 glow-text">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              ONZE est né de la passion pour la musique authentique et l'art sans compromis. 
              Nous sommes une famille d'artistes, de créateurs et de rêveurs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pointer-events-auto text-left">
              <div className="bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
                <h3 className="text-2xl font-tech text-primary mb-4">Notre Histoire</h3>
                <p className="text-muted-foreground mb-4">
                  Fondé en 2024, ONZE est né de la volonté de créer un espace où l'authenticité 
                  prime sur les tendances commerciales.
                </p>
                <p className="text-muted-foreground">
                  Nous croyons en la puissance de la musique underground pour transformer 
                  les mentalités et créer des connexions profondes.
                </p>
              </div>
              <div className="bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
                <h3 className="text-2xl font-tech text-primary mb-4">Nos Valeurs</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Authenticité avant tout</li>
                  <li>• Support des artistes émergents</li>
                  <li>• Innovation créative</li>
                  <li>• Communauté underground</li>
                  <li>• Passion musicale pure</li>
                </ul>
              </div>
              <div className="bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all md:col-span-2">
                <h3 className="text-2xl font-tech text-primary mb-4">Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-muted-foreground">
                  <div>
                    <p className="text-primary font-tech mb-2">Email</p>
                    <p>contact@onze-label.com</p>
                  </div>
                  <div>
                    <p className="text-primary font-tech mb-2">Social</p>
                    <p>@onze_official</p>
                  </div>
                  <div>
                    <p className="text-primary font-tech mb-2">Booking</p>
                    <p>booking@onze-label.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;