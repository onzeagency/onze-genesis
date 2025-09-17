import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import DreamyParticles from '@/components/DreamyParticles';
import xiLogoMain from '@/assets/xi-logo-main.png';

// Mock data for artists
const artists = [
  {
    id: 1,
    slug: 'artist-1',
    name: 'NEXUS',
    genre: 'Techno Underground',
    description: 'Pionnier du son underground avec des beats hypnotiques',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    slug: 'artist-2', 
    name: 'VOID',
    genre: 'Dark Electronic',
    description: 'Explorateur des profondeurs sonores les plus sombres',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    slug: 'artist-3',
    name: 'PULSE',
    genre: 'Industrial Techno',
    description: 'Fusion parfaite entre industrie et technologie',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    slug: 'artist-4',
    name: 'ECHO',
    genre: 'Ambient Electronic',
    description: 'Créateur d\'atmosphères immersives et éthérées',
    image: '/placeholder.svg'
  },
  {
    id: 5,
    slug: 'artist-5',
    name: 'FLUX',
    genre: 'Experimental Bass',
    description: 'Manipulateur de fréquences et architecte du chaos',
    image: '/placeholder.svg'
  },
  {
    id: 6,
    slug: 'artist-6',
    name: 'CIPHER',
    genre: 'Minimal Techno',
    description: 'Maître de la subtilité et des rythmes hypnotiques',
    image: '/placeholder.svg'
  },
  {
    id: 7,
    slug: 'artist-7',
    name: 'NOVA',
    genre: 'Acid Techno',
    description: 'Explosion d\'énergie pure et de sons acides',
    image: '/placeholder.svg'
  },
  {
    id: 8,
    slug: 'artist-8',
    name: 'GHOST',
    genre: 'Dark Ambient',
    description: 'Sculpteur d\'ambiances spectrales et mystérieuses',
    image: '/placeholder.svg'
  },
  {
    id: 9,
    slug: 'artist-9',
    name: 'STORM',
    genre: 'Hardcore Techno',
    description: 'Force de la nature dans l\'univers électronique',
    image: '/placeholder.svg'
  }
];

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
              {artists.map((artist) => (
                <Link
                  key={artist.id}
                  to={`/artists/${artist.slug}`}
                  className="bg-background border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all hover:scale-105 cursor-pointer group"
                >
                  <div className="aspect-square bg-card rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-tech text-primary mb-2">{artist.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{artist.genre}</p>
                  <p className="text-muted-foreground text-xs">{artist.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artists;