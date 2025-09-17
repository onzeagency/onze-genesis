import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import TechnoGrid from '@/components/TechnoGrid';
import GlitchText from '@/components/GlitchText';
import artistExample1 from '@/assets/artist-example-1.jpg';
import artistExample2 from '@/assets/artist-example-2.jpg';

// Extended artists data with more details
const artists = [
  {
    id: 1,
    slug: 'artist-1',
    name: 'KÖFTER',
    genre: 'Techno Underground',
    description: 'Pionnier du son underground avec des beats hypnotiques.',
    image: artistExample1,
    bio: 'NEXUS explore les frontières de la techno underground depuis plus de 8 ans. Ses performances live sont légendaires dans la scène parisienne.',
    tracks: ['Dark Protocol', 'System Override', 'Neural Networks'],
    followers: '12.5K',
    releases: 15
  },
  {
    id: 2,
    slug: 'artist-2', 
    name: 'KÖFTER',
    genre: 'Dark Electronic',
    description: 'Explorateur des profondeurs sonores les plus sombres.',
    image: artistExample2,
    bio: 'VOID puise son inspiration dans les espaces abandonnés et les paysages industriels pour créer une musique viscérale et émotionnelle.',
    tracks: ['Empty Spaces', 'Industrial Decay', 'Ghost in Machine'],
    followers: '8.9K',
    releases: 12
  },
  {
    id: 3,
    slug: 'artist-3',
    name: 'KÖFTER',
    genre: 'Industrial Techno',
    description: 'Fusion parfaite entre industrie et technologie, architecte de rythmes mécaniques puissants.',
    image: '/placeholder.svg',
    bio: 'PULSE transforme les sons industriels en symphonies électroniques. Ses tracks sont des hymnes à la modernité urbaine.',
    tracks: ['Machine Heart', 'Steel Dreams', 'Urban Warfare'],
    followers: '15.2K',
    releases: 18
  },
  {
    id: 4,
    slug: 'artist-4',
    name: 'KÖFTER',
    genre: 'Ambient Electronic',
    description: 'Créateur d\'atmosphères immersives et éthérées qui transcendent les limites du réel.',
    image: '/placeholder.svg',
    bio: 'ECHO compose des paysages sonores cinématographiques. Ses albums sont des voyages introspectifs dans l\'inconscient collectif.',
    tracks: ['Distant Memories', 'Ethereal Waves', 'Time Collapse'],
    followers: '6.7K',
    releases: 9
  },
  {
    id: 5,
    slug: 'artist-5',
    name: 'KÖFTER',
    genre: 'Experimental Bass',
    description: 'Manipulateur de fréquences et architecte du chaos organisé dans l\'univers des basses fréquences.',
    image: '/placeholder.svg',
    bio: 'FLUX repousse les limites physiques du son. Ses performances sont des expériences sensorielles totales.',
    tracks: ['Frequency Shift', 'Bass Dimension', 'Quantum Leap'],
    followers: '11.3K',
    releases: 14
  },
  {
    id: 6,
    slug: 'artist-6',
    name: 'KÖFTER',
    genre: 'Minimal Techno',
    description: 'Maître de la subtilité et des rythmes hypnotiques, partisan de l\'efficacité minimaliste.',
    image: '/placeholder.svg',
    bio: 'CIPHER croit en la puissance du minimal. Ses compositions épurées révèlent la beauté dans la simplicité.',
    tracks: ['Code Breaker', 'Minimal Protocol', 'Silent Algorithm'],
    followers: '9.8K',
    releases: 11
  },
  {
    id: 7,
    slug: 'artist-7',
    name: 'KÖFTER',
    genre: 'Acid Techno',
    description: 'Explosion d\'énergie pure et de sons acides qui embrasent les dancefloors underground.',
    image: '/placeholder.svg',
    bio: 'NOVA ramène l\'esprit acid des années 90 avec une approche moderne. Ses sets sont des déflagrations sonores.',
    tracks: ['Acid Storm', 'TB-303 Dreams', 'Rave Revolution'],
    followers: '13.6K',
    releases: 16
  },
  {
    id: 8,
    slug: 'artist-8',
    name: 'KÖFTER',
    genre: 'Dark Ambient',
    description: 'Sculpteur d\'ambiances spectrales et mystérieuses qui hantent l\'imaginaire collectif.',
    image: '/placeholder.svg',
    bio: 'GHOST explore les territoires sonores les plus sombres. Sa musique est une méditation sur l\'existence et le néant.',
    tracks: ['Phantom Echoes', 'Spectral Realm', 'Shadow Dance'],
    followers: '7.4K',
    releases: 10
  },
  {
    id: 9,
    slug: 'artist-9',
    name: 'KÖFTER',
    genre: 'Hardcore Techno',
    description: 'Force de la nature dans l\'univers électronique, maître des BPM extrêmes et des kicks puissants.',
    image: '/placeholder.svg',
    bio: 'STORM incarne la rage et l\'énergie pure. Ses tracks sont des ouragans sonores qui balaient tout sur leur passage.',
    tracks: ['Thunder Strike', 'Lightning Speed', 'Eye of Storm'],
    followers: '10.9K',
    releases: 13
  },
  {
    id: 10,
    slug: 'artist-10',
    name: 'KÖFTER',
    genre: 'Cyberpunk Techno',
    description: 'Visionnaire du futur électronique, créateur de bandes sonores pour la réalité virtuelle.',
    image: '/placeholder.svg',
    bio: 'MATRIX compose la musique du futur. Ses productions sont des interfaces entre l\'humain et la machine.',
    tracks: ['Digital Reality', 'Code Matrix', 'Virtual Dreams'],
    followers: '14.7K',
    releases: 20
  },
  {
    id: 11,
    slug: 'artist-11',
    name: 'KÖFTER',
    genre: 'Underground Breaks',
    description: 'Révolutionnaire des breakbeats, anarchiste du rythme qui brise les conventions.',
    image: '/placeholder.svg',
    bio: 'REBEL refuse les formats établis. Sa musique est un manifeste contre la standardisation de l\'électronique.',
    tracks: ['Break the System', 'Rebel Frequency', 'Underground Anthem'],
    followers: '8.1K',
    releases: 7
  },
  {
    id: 12,
    slug: 'artist-12',
    name: 'KÖFTER',
    genre: 'Synthwave Techno',
    description: 'Nostalgique du futur, créateur d\'atmosphères rétro-futuristes baignées de néons.',
    image: '/placeholder.svg',
    bio: 'NEON puise dans l\'esthétique des années 80 pour créer la techno de demain. Ses morceaux sont des voyages temporels.',
    tracks: ['Neon Nights', 'Retro Future', 'Synthwave Paradise'],
    followers: '12.0K',
    releases: 17
  }
];

const Artists = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [selectedGenre, setSelectedGenre] = useState('All');

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  const genres = ['All', ...Array.from(new Set(artists.map(artist => artist.genre)))];
  const filteredArtists = selectedGenre === 'All' ? artists : artists.filter(artist => artist.genre === selectedGenre);

  return (
    <div className="bg-background relative min-h-screen" onMouseMove={handleMouseMove}>
      <Navigation activeSection="artists" />
      <TechnoGrid className="fixed inset-0 z-0 opacity-10" />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <GlitchText 
              text="ARTISTS" 
              className="text-7xl font-hardrace font-bold glow-text"
            />
            <p className="text-xl font-tech text-muted-foreground leading-relaxed">
              Découvrez notre roster d'artistes exceptionnels qui définissent l'avenir de la musique underground. 
              Chaque artiste apporte sa vision unique à notre collectif cyberpunk.
            </p>
            
            {/* Genre Filter */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-4 py-2 text-xs font-tech font-medium tracking-wider uppercase border transition-all duration-300 ${
                    selectedGenre === genre
                      ? 'border-primary bg-primary text-background shadow-neon'
                      : 'border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/10'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredArtists.map((artist) => (
              <Link
                key={artist.id}
                to={`/artists/${artist.slug}`}
                className="group relative bg-card rounded-lg overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-neon"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                
                <div className="p-3 space-y-2">
                  <div>
                    <h3 className="font-hardrace text-white font-bold text-sm glow-text truncate">
                      {artist.name}
                    </h3>
                    <p className="text-xs font-tech text-primary uppercase tracking-wide">
                      {artist.genre}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs font-tech text-muted-foreground">
                    <span>{artist.followers}</span>
                    <span>{artist.releases} releases</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-primary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-tech font-bold text-center text-primary mb-12 glow-text">
              ONZE EN CHIFFRES
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-hardrace text-primary glow-text">12</div>
                <div className="text-sm font-tech text-muted-foreground uppercase tracking-wider">Artistes</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-hardrace text-primary glow-text">147</div>
                <div className="text-sm font-tech text-muted-foreground uppercase tracking-wider">Releases</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-hardrace text-primary glow-text">892K</div>
                <div className="text-sm font-tech text-muted-foreground uppercase tracking-wider">Streams</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-hardrace text-primary glow-text">47</div>
                <div className="text-sm font-tech text-muted-foreground uppercase tracking-wider">Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artists;