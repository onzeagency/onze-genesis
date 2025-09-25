import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import CyberBackground from '@/components/CyberBackground';
import TechnoGrid from '@/components/TechnoGrid';
import GlitchText from '@/components/GlitchText';
import DreamyLogo from '@/components/DreamyLogo';
import xiLogoMain from '@/assets/xi-logo-main.png';
import { useParallax } from '@/hooks/useParallax';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0
  });
  
  const { scrollY, getTransform, getOpacity } = useParallax();

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

  return (
    <CyberBackground>
      <div className="bg-background relative min-h-screen" onMouseMove={handleMouseMove}>
        {isLoading && <Loader onComplete={handleLoadingComplete} />}
        
        {!isLoading && (
          <>
            <Navigation activeSection="home" />
            
            {/* Hero Section with Cyber Effects */}
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* Background with parallax */}
              <div 
                className="absolute inset-0 z-0"
                style={getTransform(-0.5)}
              >
                <TechnoGrid />
              </div>
              
              {/* Main XI Logo with parallax */}
              <div 
                className="relative z-20 flex flex-col items-center justify-center space-y-8"
                style={getTransform(-0.2)}
              >
                <div className="w-full h-96">
                  <DreamyLogo />
                </div>
                
                {/* Underground label */}
                <div 
                  className="text-center space-y-2"
                  style={getTransform(-0.1)}
                >
                  <GlitchText 
                    text="UNDERGROUND" 
                    className="text-4xl font-tech font-bold glow-text"
                  />
                  <div className="w-32 h-px bg-primary mx-auto opacity-60" />
                  <p className="text-muted-foreground font-tech tracking-[0.3em] text-sm">
                    TECHNO • EXPERIENCE • COLLECTIVE
                  </p>
                </div>
              </div>
              
              {/* Floating cyber elements with parallax */}
              <div 
                className="absolute top-20 left-20 animate-matrix"
                style={getTransform(-0.3)}
              >
                <div className="w-1 h-20 bg-primary opacity-20" />
              </div>
              <div 
                className="absolute bottom-20 right-20 animate-matrix" 
                style={{ 
                  animationDelay: '2s',
                  ...getTransform(-0.4)
                }}
              >
                <div className="w-1 h-16 bg-primary opacity-15" />
              </div>
              
              {/* Parallax overlay for smooth transition */}
              <div 
                className="absolute inset-0 z-30 pointer-events-none"
                style={{
                  background: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,${getOpacity(0, 0.8)}) 100%)`,
                }}
              />
            </section>

            {/* Artists Section */}
            <section 
              id="artists" 
              className="relative min-h-screen py-20 overflow-hidden bg-background"
            >
              <div 
                className="absolute inset-0 z-0 opacity-30"
                style={getTransform(0.3)}
              >
                <TechnoGrid />
              </div>
              <div className="container mx-auto px-6 relative z-10">
                <div 
                  className="text-center mb-16"
                  style={getTransform(-0.1)}
                >
                  <GlitchText 
                    text="ARTISTS" 
                    className="text-6xl font-hardrace font-bold glow-text mb-4"
                  />
                  <p className="text-muted-foreground font-tech tracking-[0.2em] max-w-2xl mx-auto">
                    Découvrez notre roster d'artistes underground, chacun apportant sa vision unique de la scène techno
                  </p>
                </div>
                
                <div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  style={getTransform(-0.05)}
                >
                  {[
                    { name: 'NEXUS', genre: 'DARK TECHNO', status: 'LIVE' },
                    { name: 'CIPHER', genre: 'INDUSTRIAL', status: 'UPCOMING' },
                    { name: 'VOLT', genre: 'ACID HOUSE', status: 'RESIDENT' },
                    { name: 'ECHO', genre: 'MINIMAL', status: 'GUEST' },
                    { name: 'PULSE', genre: 'HARDCORE', status: 'LIVE' },
                    { name: 'SYNTH', genre: 'ELECTRO', status: 'RESIDENT' },
                    { name: 'STORM', genre: 'GABBER', status: 'UPCOMING' },
                    { name: 'WAVE', genre: 'TRANCE', status: 'GUEST' },
                    { name: 'FLUX', genre: 'BREAKBEAT', status: 'LIVE' }
                  ].map((artist, index) => (
                    <div key={artist.name} className="holo-card p-6 cyber-button group cursor-pointer">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-2xl font-tech font-bold text-primary">{artist.name}</h3>
                          <span className={`px-2 py-1 text-xs font-tech tracking-wider border ${
                            artist.status === 'LIVE' ? 'border-primary text-primary' :
                            artist.status === 'RESIDENT' ? 'border-accent text-accent' :
                            'border-muted-foreground text-muted-foreground'
                          }`}>
                            {artist.status}
                          </span>
                        </div>
                        <p className="text-muted-foreground font-tech text-sm tracking-[0.1em]">{artist.genre}</p>
                        <div className="w-full h-px bg-gradient-primary opacity-50" />
                        <div className="text-xs font-tech text-muted-foreground tracking-wider">
                          PROFILE • TRACKS • BOOKINGS
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Label Section */}
            <section 
              id="label" 
              className="relative min-h-screen py-20 overflow-hidden bg-background"
            >
              <div 
                className="absolute inset-0 z-0 opacity-20"
                style={getTransform(-0.2)}
              >
                <TechnoGrid />
              </div>
              <div className="container mx-auto px-6 relative z-10">
                <div 
                  className="max-w-4xl mx-auto text-center space-y-12"
                  style={getTransform(-0.15)}
                >
                  <GlitchText 
                    text="LABEL" 
                    className="text-6xl font-hardrace font-bold glow-text"
                  />
                  
                  <div className="space-y-8" style={getTransform(-0.08)}>
                    <p className="text-xl font-tech text-foreground leading-relaxed">
                      ONZE représente l'avant-garde de la scène techno underground. 
                      Nous développons des talents émergents et repoussons les limites sonores.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                      <div className="holo-card p-8 space-y-4">
                        <h3 className="text-2xl font-tech font-bold text-primary">NOTRE VISION</h3>
                        <p className="text-muted-foreground font-tech leading-relaxed">
                          Créer un écosystème où l'innovation sonore rencontre la culture underground. 
                          Chaque release est une exploration des territoires inexplorés de la musique électronique.
                        </p>
                      </div>
                      
                      <div className="holo-card p-8 space-y-4">
                        <h3 className="text-2xl font-tech font-bold text-primary">NOS SERVICES</h3>
                        <ul className="text-muted-foreground font-tech space-y-2">
                          <li>• Production et mastering</li>
                          <li>• Distribution digitale</li>
                          <li>• Support artistique</li>
                          <li>• Booking et événements</li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* SoundCloud Integration */}
                    <div className="mt-16 space-y-8">
                      <h3 className="text-3xl font-tech font-bold text-primary text-center glow-text">
                        ÉCOUTER NOS TRACKS
                      </h3>
                      
                      <div className="holo-card p-6 max-w-4xl mx-auto">
                        <iframe 
                          width="100%" 
                          height="450" 
                          scrolling="no" 
                          frameBorder="no" 
                          allow="autoplay"
                          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/967849094&color=%23ff00ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                          className="rounded border border-primary/30"
                        ></iframe>
                        
                        <div className="mt-6 text-center">
                          <a 
                            href="https://soundcloud.com/onzelabel" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="cyber-button inline-block"
                          >
                            <span>DÉCOUVRIR PLUS SUR SOUNDCLOUD</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Events Section */}
            <section 
              id="events" 
              className="relative min-h-screen py-20 overflow-hidden bg-background"
            >
              <div 
                className="absolute inset-0 z-0 opacity-30"
                style={getTransform(0.25)}
              >
                <TechnoGrid />
              </div>
              <div className="container mx-auto px-6 relative z-10">
                <div 
                  className="text-center mb-16"
                  style={getTransform(-0.1)}
                >
                  <GlitchText 
                    text="EVENTS" 
                    className="text-6xl font-hardrace font-bold glow-text mb-4"
                  />
                  <p className="text-muted-foreground font-tech tracking-[0.2em] max-w-2xl mx-auto">
                    Expériences immersives dans l'underground parisien
                  </p>
                </div>
                
                <div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                  style={getTransform(-0.08)}
                >
                  <div className="holo-card p-8 space-y-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-3xl font-tech font-bold text-primary">ONZE NIGHT VOL.1</h3>
                      <span className="px-3 py-1 border border-accent text-accent text-xs font-tech tracking-wider">
                        UPCOMING
                      </span>
                    </div>
                    <p className="text-muted-foreground font-tech">
                      Une nuit d'exploration sonore dans les profondeurs de l'underground parisien. 
                      Quatre artistes, quatre univers, une expérience totale.
                    </p>
                    <div className="space-y-2 text-sm font-tech">
                      <div className="flex justify-between">
                        <span className="text-primary">DATE</span>
                        <span className="text-foreground">15 NOV 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-primary">LIEU</span>
                        <span className="text-foreground">LOCATION TBA</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-primary">LINE-UP</span>
                        <span className="text-foreground">NEXUS • CIPHER • VOLT</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="holo-card p-8 space-y-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-3xl font-tech font-bold text-primary">UNDERGROUND SESSIONS</h3>
                      <span className="px-3 py-1 border border-primary text-primary text-xs font-tech tracking-wider">
                        RECURRING
                      </span>
                    </div>
                    <p className="text-muted-foreground font-tech">
                      Sessions mensuelles dédiées à la découverte de nouveaux talents 
                      et à l'expérimentation sonore.
                    </p>
                    <div className="space-y-2 text-sm font-tech">
                      <div className="flex justify-between">
                        <span className="text-primary">FRÉQUENCE</span>
                        <span className="text-foreground">MENSUEL</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-primary">FORMAT</span>
                        <span className="text-foreground">LIVE + DJ SET</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-primary">CONCEPT</span>
                        <span className="text-foreground">OPEN FLOOR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Merch Section */}
            <section 
              id="merch" 
              className="relative min-h-screen py-20 overflow-hidden bg-background"
            >
              <div 
                className="absolute inset-0 z-0 opacity-20"
                style={getTransform(-0.3)}
              >
                <TechnoGrid />
              </div>
              <div className="container mx-auto px-6 relative z-10">
                <div 
                  className="text-center mb-16"
                  style={getTransform(-0.12)}
                >
                  <GlitchText 
                    text="MERCH" 
                    className="text-6xl font-hardrace font-bold glow-text mb-4"
                  />
                  <p className="text-muted-foreground font-tech tracking-[0.2em] max-w-2xl mx-auto">
                    Portez l'underground avec style
                  </p>
                </div>
                
                <div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                  style={getTransform(-0.05)}
                >
                  {[
                    { name: 'XI LOGO TEE', price: '35€', desc: 'T-shirt premium noir avec logo XI en sérigraphie rose fluo' },
                    { name: 'ONZE HOODIE', price: '65€', desc: 'Sweat à capuche oversized avec broderie techno et poches kangourou' },
                    { name: 'CYBER CAP', price: '25€', desc: 'Casquette snapback avec patch réfléchissant et détails néon' }
                  ].map((item, index) => (
                    <div key={item.name} className="holo-card p-8 space-y-6 group cursor-pointer">
                      <div className="aspect-square bg-muted/20 border border-primary/30 flex items-center justify-center mb-6">
                        <div className="text-primary/50 font-tech text-sm tracking-wider">
                          PRODUCT IMAGE
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-tech font-bold text-primary">{item.name}</h3>
                          <span className="text-2xl font-tech font-bold text-foreground">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground font-tech text-sm leading-relaxed">
                          {item.desc}
                        </p>
                        <button className="w-full cyber-button">
                          <span>COMMANDER</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* About Section */}
            <section 
              id="about" 
              className="relative min-h-screen py-20 overflow-hidden bg-background"
            >
              <div 
                className="absolute inset-0 z-0 opacity-30"
                style={getTransform(0.35)}
              >
                <TechnoGrid />
              </div>
              <div className="container mx-auto px-6 relative z-10">
                <div 
                  className="max-w-4xl mx-auto text-center space-y-12"
                  style={getTransform(-0.15)}
                >
                  <GlitchText 
                    text="ABOUT" 
                    className="text-6xl font-hardrace font-bold glow-text"
                  />
                  
                  <div 
                    className="space-y-8"
                    style={getTransform(-0.08)}
                  >
                    <p className="text-xl font-tech text-foreground leading-relaxed">
                      ONZE est né de la passion pour l'underground et l'innovation sonore. 
                      Nous sommes un collectif d'artistes, producteurs et visionnaires unis par une même obsession : 
                      repousser les limites de la musique électronique.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                      <div className="holo-card p-8 space-y-4">
                        <h3 className="text-2xl font-tech font-bold text-primary">NOTRE MISSION</h3>
                        <p className="text-muted-foreground font-tech leading-relaxed">
                          Créer un pont entre l'underground authentique et les nouvelles générations d'amateurs de techno. 
                          Chaque projet est une exploration, chaque événement une révélation.
                        </p>
                      </div>
                      
                      <div className="holo-card p-8 space-y-4">
                        <h3 className="text-2xl font-tech font-bold text-primary">CONTACT</h3>
                        <div className="space-y-2 text-muted-foreground font-tech text-sm">
                          <p>contact@onze-underground.com</p>
                          <p>booking@onze-underground.com</p>
                          <p>+33 1 XX XX XX XX</p>
                          <p>Paris, France</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </CyberBackground>
  );
};

export default Index;