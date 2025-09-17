import Navigation from '@/components/Navigation';

const Events = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      
      <main className="relative z-0 min-h-screen">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 pt-36">
          <div className="text-center max-w-4xl px-8">
            <h1 className="text-6xl font-hardrace text-primary mb-8 glow-text">
              Events
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Rejoignez-nous pour des soirées underground inoubliables. ONZE organise des événements 
              qui marquent la scène musicale alternative.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pointer-events-auto">
              <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
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
              <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
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
      </main>
    </div>
  );
};

export default Events;