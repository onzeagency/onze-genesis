import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import DreamyParticles from '@/components/DreamyParticles';
import xiLogoMain from '@/assets/xi-logo-main.png';
const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0
  });
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({
      x: e.clientX,
      y: e.clientY
    });
  };

  // Handle direct URL access to sections
  useEffect(() => {
    if (!isLoading && showContent) {
      const path = location.pathname;
      let sectionId = 'home';
      if (path === '/artists') sectionId = 'artists';else if (path === '/label') sectionId = 'label';else if (path === '/merch') sectionId = 'merch';else if (path === '/events') sectionId = 'events';else if (path === '/about-us') sectionId = 'about';
      if (sectionId !== 'home') {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location.pathname, isLoading, showContent]);

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'artists', 'label', 'merch', 'events', 'about'];
      const scrollPos = window.scrollY + 200; // Offset for header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(sectionId);

            // Update URL without scrolling
            const newPath = sectionId === 'home' ? '/' : `/${sectionId === 'about' ? 'about-us' : sectionId}`;
            if (location.pathname !== newPath) {
              navigate(newPath, {
                replace: true
              });
            }
            break;
          }
        }
      }
    };
    if (showContent) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [showContent, navigate, location.pathname]);
  return <div className="bg-background relative" onMouseMove={handleMouseMove}>
      {isLoading && <Loader onComplete={handleLoadingComplete} />}
      
      {!isLoading && <>
          <Navigation activeSection={activeSection} />
          
          {/* Hero Section with Particles */}
          <section id="home" className="relative min-h-screen flex items-center justify-center">
            <DreamyParticles mouse={mouse} />
            
            {/* Main XI Logo */}
            <div className="relative z-10 flex items-center justify-center">
              <img 
                src={xiLogoMain} 
                alt="XI" 
                className="w-96 h-96 object-contain animate-pulse-glow"
              />
            </div>
          </section>

          {/* Artists Section */}
          <section id="artists" className="min-h-screen bg-gradient-to-b from-background to-card flex items-center justify-center py-20">
            <div className="container mx-auto px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-6xl font-hardrace text-primary mb-8 glow-text">
                  Artists
                </h2>
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

          {/* Label Section */}
          <section id="label" className="min-h-screen bg-gradient-to-b from-card to-background flex items-center justify-center py-20">
            <div className="container mx-auto px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-6xl font-hardrace text-primary mb-8 glow-text">
                  Label
                </h2>
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

          {/* Merch Section */}
          <section id="merch" className="min-h-screen bg-gradient-to-b from-background to-card flex items-center justify-center py-20">
            <div className="container mx-auto px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-6xl font-hardrace text-primary mb-8 glow-text">
                  Merch
                </h2>
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

          {/* Events Section */}
          <section id="events" className="min-h-screen bg-gradient-to-b from-card to-background flex items-center justify-center py-20">
            <div className="container mx-auto px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-6xl font-hardrace text-primary mb-8 glow-text">
                  Events
                </h2>
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

          {/* About Section */}
          <section id="about" className="min-h-screen bg-gradient-to-b from-background to-card flex items-center justify-center py-20">
            <div className="container mx-auto px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-6xl font-hardrace text-primary mb-8 glow-text">
                  About Us
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                  ONZE est né de la passion pour la musique authentique et l'art sans compromis. 
                  Nous sommes une famille d'artistes, de créateurs et de rêveurs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="bg-background border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
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
                  <div className="bg-background border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
                    <h3 className="text-2xl font-tech text-primary mb-4">Nos Valeurs</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Authenticité avant tout</li>
                      <li>• Support des artistes émergents</li>
                      <li>• Innovation créative</li>
                      <li>• Communauté underground</li>
                      <li>• Passion musicale pure</li>
                    </ul>
                  </div>
                  <div className="bg-background border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all md:col-span-2">
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
          </section>
        </>}
    </div>;
};
export default Index;