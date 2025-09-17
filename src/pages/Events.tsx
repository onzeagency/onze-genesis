import { useState } from 'react';
import Navigation from '@/components/Navigation';

const Events = () => {
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
      <Navigation activeSection="events" />
      
      {/* Events Section */}
      <section className="min-h-screen bg-gradient-to-b from-card to-background flex items-center justify-center py-20 pt-32">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-hardrace text-primary mb-8 glow-text">
              Events
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Rejoignez-nous pour des soirées underground inoubliables. ONZE organise des événements 
              qui marquent la scène musicale alternative.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-tech text-primary">ONZE Night Vol.1</h3>
                  <span className="text-accent font-tech text-sm">À VENIR</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Une soirée exclusive avec nos artistes phares dans un lieu underground secret.
                </p>
                <div className="text-sm text-primary">
                  <p>📅 Date : À annoncer</p>
                  <p>📍 Lieu : TBA</p>
                  <p>🎵 Line-up : Surprise</p>
                </div>
              </div>
              <div className="bg-background border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-tech text-primary">Underground Sessions</h3>
                  <span className="text-accent font-tech text-sm">RÉCURRENT</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Sessions intimes avec nos artistes, découvertes et live exclusifs.
                </p>
                <div className="text-sm text-primary">
                  <p>📅 Fréquence : Mensuel</p>
                  <p>📍 Lieu : Studio ONZE</p>
                  <p>🎵 Format : Live & DJ Set</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;