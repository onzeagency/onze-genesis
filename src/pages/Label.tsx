import { useState } from 'react';
import Navigation from '@/components/Navigation';
import TechnoGrid from '@/components/TechnoGrid';
import GlitchText from '@/components/GlitchText';

const releases = [
  {
    id: 1,
    title: 'ONZE001 - Dark Protocol EP',
    artist: 'NEXUS',
    date: '2024-12-15',
    genre: 'Techno Underground',
    status: 'Released',
    description: 'Premier EP du label, établissant les fondations sonores de notre univers cyberpunk.',
    tracks: ['Dark Protocol', 'System Override', 'Neural Networks', 'Binary Dreams']
  },
  {
    id: 2,
    title: 'ONZE002 - Industrial Decay',
    artist: 'VOID',
    date: '2024-11-28',
    genre: 'Dark Electronic',
    status: 'Released',
    description: 'Exploration des espaces abandonnés à travers des paysages sonores post-industriels.',
    tracks: ['Empty Spaces', 'Rust & Steel', 'Abandoned Factory', 'Ghost in Machine']
  },
  {
    id: 3,
    title: 'ONZE003 - Machine Heart',
    artist: 'PULSE',
    date: '2024-10-10',
    genre: 'Industrial Techno',
    status: 'Released',
    description: 'Hymne à la modernité urbaine où l\'humain et la machine ne font qu\'un.',
    tracks: ['Machine Heart', 'Steel Dreams', 'Urban Warfare', 'Mechanical Soul']
  },
  {
    id: 4,
    title: 'ONZE004 - Compilation Vol.1',
    artist: 'Various Artists',
    date: '2025-01-20',
    genre: 'Underground Electronic',
    status: 'Coming Soon',
    description: 'Première compilation rassemblant tous nos artistes dans un voyage sonore collectif.',
    tracks: ['TBA', 'TBA', 'TBA', 'TBA']
  }
];

const team = [
  {
    name: 'ALEX CYBER',
    role: 'Founder & A&R',
    description: 'Visionnaire du label, découvreur de talents underground depuis 2018.',
    bio: 'Passionné de musique électronique depuis l\'adolescence, Alex a créé ONZE pour donner une plateforme aux artistes authentiques.'
  },
  {
    name: 'MAYA TECH',
    role: 'Creative Director',
    description: 'Architecte de l\'identité visuelle et créative du label.',
    bio: 'Designer graphique spécialisée dans l\'esthétique cyberpunk, Maya crée l\'univers visuel de chaque release.'
  },
  {
    name: 'JULES SOUND',
    role: 'Sound Engineer',
    description: 'Maître du son, responsable du mastering et de la qualité audio.',
    bio: 'Ingénieur son avec 15 ans d\'expérience, Jules garantit l\'excellence technique de chaque production.'
  },
  {
    name: 'SARA EVENTS',
    role: 'Event Manager',
    description: 'Organisatrice des événements underground et expériences immersives.',
    bio: 'Spécialiste des événements alternatifs, Sara crée des expériences mémorables pour notre communauté.'
  }
];

const Label = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('about');

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="bg-background relative min-h-screen" onMouseMove={handleMouseMove}>
      <Navigation activeSection="label" />
      <TechnoGrid className="fixed inset-0 z-0 opacity-10" />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <GlitchText 
              text="LABEL" 
              className="text-7xl font-hardrace font-bold glow-text"
            />
            <p className="text-xl font-tech text-muted-foreground leading-relaxed">
              ONZE représente l'avant-garde de la scène techno underground. 
              Nous développons des talents émergents et repoussons les limites sonores de l'électronique contemporaine.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8 mb-16">
            {[
              { id: 'about', label: 'À PROPOS' },
              { id: 'releases', label: 'RELEASES' },
              { id: 'team', label: 'ÉQUIPE' },
              { id: 'soundcloud', label: 'SOUNDCLOUD' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-tech font-medium tracking-wider uppercase border transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'border-primary bg-primary text-background shadow-neon'
                    : 'border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="holo-card p-8 space-y-6">
                  <h3 className="text-3xl font-tech font-bold text-primary glow-text">NOTRE VISION</h3>
                  <p className="text-muted-foreground font-tech leading-relaxed text-lg">
                    Créer un écosystème où l'innovation sonore rencontre la culture underground. 
                    Chaque release est une exploration des territoires inexplorés de la musique électronique.
                  </p>
                  <p className="text-muted-foreground font-tech leading-relaxed">
                    ONZE n'est pas seulement un label, c'est un mouvement artistique qui promeut 
                    l'authenticité et la créativité sans compromis dans un monde de plus en plus standardisé.
                  </p>
                </div>
                
                <div className="holo-card p-8 space-y-6">
                  <h3 className="text-3xl font-tech font-bold text-primary glow-text">NOS SERVICES</h3>
                  <ul className="text-muted-foreground font-tech space-y-3 text-lg">
                    <li className="flex items-center space-x-3">
                      <span className="text-primary">•</span>
                      <span>Production et mastering professionnel</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-primary">•</span>
                      <span>Distribution digitale mondiale</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-primary">•</span>
                      <span>Support artistique personnalisé</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-primary">•</span>
                      <span>Booking et événements exclusifs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-primary">•</span>
                      <span>Création d'identité visuelle</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-primary">•</span>
                      <span>Promotion et marketing digital</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="holo-card p-8 space-y-6">
                <h3 className="text-3xl font-tech font-bold text-primary glow-text text-center">L'HISTOIRE D'ONZE</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-4">
                    <div className="text-4xl font-hardrace text-primary glow-text">2024</div>
                    <h4 className="text-xl font-tech text-primary">NAISSANCE</h4>
                    <p className="text-muted-foreground font-tech text-sm">
                      Création du label avec une vision claire : promouvoir l'underground authentique
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl font-hardrace text-primary glow-text">3</div>
                    <h4 className="text-xl font-tech text-primary">PREMIERS RELEASES</h4>
                    <p className="text-muted-foreground font-tech text-sm">
                      Lancement avec des EP remarqués par la scène underground internationale
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl font-hardrace text-primary glow-text">2025</div>
                    <h4 className="text-xl font-tech text-primary">EXPANSION</h4>
                    <p className="text-muted-foreground font-tech text-sm">
                      Développement de notre roster et organisation d'événements immersifs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Releases Tab */}
          {activeTab === 'releases' && (
            <div className="max-w-6xl mx-auto space-y-8">
              <h3 className="text-4xl font-tech font-bold text-center text-primary mb-12 glow-text">
                CATALOGUE RELEASES
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {releases.map((release) => (
                  <div key={release.id} className="holo-card p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-tech text-primary font-bold">{release.title}</h4>
                        <p className="text-muted-foreground font-tech">{release.artist}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-tech font-medium rounded ${
                        release.status === 'Released' 
                          ? 'bg-primary text-background' 
                          : 'bg-accent text-background'
                      }`}>
                        {release.status}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm font-tech">{release.description}</p>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-tech text-primary font-medium uppercase">Tracklist:</p>
                      <div className="grid grid-cols-2 gap-1">
                        {release.tracks.map((track, index) => (
                          <span key={index} className="text-xs font-tech text-muted-foreground">
                            {index + 1}. {track}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-primary/20">
                      <span className="text-xs font-tech text-muted-foreground">{release.date}</span>
                      <span className="text-xs font-tech text-primary">{release.genre}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="max-w-6xl mx-auto space-y-8">
              <h3 className="text-4xl font-tech font-bold text-center text-primary mb-12 glow-text">
                L'ÉQUIPE ONZE
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="holo-card p-8 space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-tech text-primary font-bold">{member.name}</h4>
                      <p className="text-accent font-tech font-medium">{member.role}</p>
                    </div>
                    <p className="text-muted-foreground font-tech">{member.description}</p>
                    <p className="text-muted-foreground font-tech text-sm leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SoundCloud Tab */}
          {activeTab === 'soundcloud' && (
            <div className="max-w-6xl mx-auto space-y-8">
              <h3 className="text-4xl font-tech font-bold text-center text-primary mb-12 glow-text">
                ÉCOUTER NOS TRACKS
              </h3>
              
              <div className="holo-card p-8 space-y-8">
                <div className="text-center space-y-4">
                  <p className="text-xl font-tech text-muted-foreground">
                    Plongez dans l'univers sonore d'ONZE et découvrez nos dernières productions underground.
                  </p>
                </div>
                
                <iframe 
                  width="100%" 
                  height="500" 
                  scrolling="no" 
                  frameBorder="no" 
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/967849094&color=%23ff00ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  className="rounded border border-primary/30 shadow-cyber"
                ></iframe>
                
                <div className="text-center space-y-6">
                  <a 
                    href="https://soundcloud.com/onzelabel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cyber-button inline-block"
                  >
                    <span>DÉCOUVRIR PLUS SUR SOUNDCLOUD</span>
                  </a>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-hardrace text-primary glow-text">147</div>
                      <div className="text-sm font-tech text-muted-foreground uppercase">Tracks</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-hardrace text-primary glow-text">25.8K</div>
                      <div className="text-sm font-tech text-muted-foreground uppercase">Followers</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-hardrace text-primary glow-text">892K</div>
                      <div className="text-sm font-tech text-muted-foreground uppercase">Plays</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Label;