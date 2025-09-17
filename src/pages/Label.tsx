import Navigation from '@/components/Navigation';

const Label = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      
      <main className="relative z-0 min-h-screen">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 pt-36">
          <div className="text-center max-w-4xl px-8">
            <h1 className="text-6xl font-hardrace text-primary mb-8 glow-text">
              Label
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              ONZE est plus qu'un label, c'est un mouvement. Nous soutenons les artistes 
              underground et créons des expériences musicales authentiques qui repoussent les limites.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pointer-events-auto">
              <div className="bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
                <h3 className="text-2xl font-tech text-primary mb-4">Notre Vision</h3>
                <p className="text-muted-foreground">
                  Promouvoir la créativité sans limites et soutenir les artistes émergents 
                  dans leur développement artistique.
                </p>
              </div>
              <div className="bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
                <h3 className="text-2xl font-tech text-primary mb-4">Nos Services</h3>
                <p className="text-muted-foreground">
                  Production, distribution, promotion et accompagnement personnalisé 
                  pour chaque artiste de notre roster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Label;