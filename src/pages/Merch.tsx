import { useState } from 'react';
import Navigation from '@/components/Navigation';

const Merch = () => {
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
      <Navigation activeSection="merch" />
      
      {/* Merch Section */}
      <section className="min-h-screen bg-gradient-to-b from-background to-card flex items-center justify-center py-20 pt-32">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-hardrace text-primary mb-8 glow-text">
              Merch
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Exprimez votre appartenance à la culture ONZE avec notre collection exclusive 
              de merchandise underground. Chaque pièce raconte une histoire.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
                <div className="h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-primary font-tech">T-Shirt ONZE</span>
                </div>
                <h3 className="text-xl font-tech text-primary mb-2">T-Shirt Classic</h3>
                <p className="text-muted-foreground mb-4">Design exclusif ONZE</p>
                <p className="text-primary font-bold">25€</p>
              </div>
              <div className="bg-background border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
                <div className="h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-primary font-tech">Hoodie ONZE</span>
                </div>
                <h3 className="text-xl font-tech text-primary mb-2">Hoodie Underground</h3>
                <p className="text-muted-foreground mb-4">Confort et style urbain</p>
                <p className="text-primary font-bold">55€</p>
              </div>
              <div className="bg-background border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
                <div className="h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-primary font-tech">Casquette ONZE</span>
                </div>
                <h3 className="text-xl font-tech text-primary mb-2">Casquette Signature</h3>
                <p className="text-muted-foreground mb-4">Logo brodé premium</p>
                <p className="text-primary font-bold">35€</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Merch;