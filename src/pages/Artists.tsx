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
    bio: 'KÖFTER explore les frontières de la techno underground depuis plus de 8 ans. Ses performances live sont légendaires dans la scène parisienne.',
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
    bio: 'KÖFTER puise son inspiration dans les espaces abandonnés et les paysages industriels pour créer une musique viscérale et émotionnelle.',
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
    bio: 'KÖFTER transforme les sons industriels en symphonies électroniques. Ses tracks sont des hymnes à la modernité urbaine.',
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
    bio: 'KÖFTER compose des paysages sonores cinématographiques. Ses albums sont des voyages introspectifs dans l\'inconscient collectif.',
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
    bio: 'KÖFTER repousse les limites physiques du son. Ses performances sont des expériences sensorielles totales.',
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
    bio: 'KÖFTER croit en la puissance du minimal. Ses compositions épurées révèlent la beauté dans la simplicité.',
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
    bio: 'KÖFTER ramène l\'esprit acid des années 90 avec une approche moderne. Ses sets sont des déflagrations sonores.',
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
    bio: 'KÖFTER explore les territoires sonores les plus sombres. Sa musique est une méditation sur l\'existence et le néant.',
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
    bio: 'KÖFTER incarne la rage et l\'énergie pure. Ses tracks sont des ouragans sonores qui balaient tout sur leur passage.',
    tracks: ['Thunder Strike', 'Lightning Speed', 'Eye of Storm'],
    followers: '10.9K',
    releases: 13
  }
];

const Artists = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  const genres = ['All', ...Array.from(new Set(artists.map(artist => artist.genre)))];
  const filteredArtists = selectedGenre === 'All' ? artists : artists.filter(artist => artist.genre === selectedGenre);

  // Staggered animation on load
  useEffect(() => {
    setVisibleCards([]);
    filteredArtists.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 100);
    });
  }, [filteredArtists]);

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
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`relative px-6 py-3 text-xs font-tech font-medium tracking-wider uppercase transition-all duration-500 transform hover:scale-105 group overflow-hidden ${
                    selectedGenre === genre
                      ? 'text-white'
                      : 'text-primary/80 hover:text-white backdrop-blur-sm'
                  }`}
                >
                  {/* Liquid morphing background */}
                  <div className={`absolute inset-0 transition-all duration-700 ease-out transform rounded-full ${
                    selectedGenre === genre
                      ? 'scale-100 opacity-100'
                      : 'scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-70'
                  }`}
                       style={{
                         background: `radial-gradient(ellipse at center, hsl(var(--primary) / 0.9) 0%, hsl(var(--primary) / 0.5) 50%, transparent 70%)`,
                         filter: 'blur(12px)'
                       }} />
                  
                  {/* Morphing border */}
                  <div className={`absolute inset-0 rounded-full border transition-all duration-500 ${
                    selectedGenre === genre
                      ? 'border-primary/70 scale-100'
                      : 'border-primary/30 scale-90 group-hover:border-primary/50 group-hover:scale-100'
                  }`}
                       style={{
                         background: 'linear-gradient(135deg, transparent, hsl(var(--primary) / 0.15), transparent)',
                         animation: selectedGenre === genre ? 'shimmer 2.5s ease-in-out infinite' : 'none'
                       }} />
                  
                  {/* Floating energy particles */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    selectedGenre === genre ? 'opacity-100' : 'opacity-0 group-hover:opacity-80'
                  }`}>
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/80 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + Math.sin(i) * 25}%`,
                          animation: `float 1.8s ease-in-out infinite`,
                          animationDelay: `${i * 0.5}s`,
                          boxShadow: '0 0 8px hsl(var(--primary))'
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Text with liquid glow */}
                  <span className={`relative z-10 transition-all duration-300 ${
                    selectedGenre === genre
                      ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] tracking-[0.25em]'
                      : 'group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))] group-hover:tracking-[0.2em]'
                  }`}>
                    {genre}
                  </span>
                  
                  {/* Liquid underline */}
                  <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out rounded-full ${
                    selectedGenre === genre 
                      ? 'w-4/5 h-0.5 bg-white/80 shadow-[0_0_12px_hsl(var(--primary))]'
                      : 'w-0 group-hover:w-3/4 h-px bg-primary group-hover:shadow-[0_0_8px_hsl(var(--primary))]'
                  }`}
                       style={{
                         background: selectedGenre === genre 
                           ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)'
                           : 'hsl(var(--primary))'
                       }} />
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
            {filteredArtists.map((artist, index) => (
              <Link
                key={artist.id}
                to={`/artists/${artist.slug}`}
                className={`group relative bg-card rounded-3xl overflow-hidden border border-primary/10 transition-all duration-700 hover:border-primary/30 ${
                  visibleCards.includes(index) 
                    ? 'animate-fade-in opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transform: `perspective(1000px) rotateX(${(mouse.y - window.innerHeight/2) * 0.01}deg) rotateY(${(mouse.x - window.innerWidth/2) * 0.01}deg)`,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[1px] group-hover:brightness-110"
                  />
                  
                  {/* Digital noise overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{
                         background: `
                           repeating-linear-gradient(
                             0deg,
                             transparent,
                             transparent 2px,
                             hsl(var(--primary) / 0.1) 2px,
                             hsl(var(--primary) / 0.1) 4px
                           ),
                           repeating-linear-gradient(
                             90deg,
                             transparent,
                             transparent 2px,
                             hsl(var(--primary) / 0.05) 2px,
                             hsl(var(--primary) / 0.05) 4px
                           )
                         `
                       }} />
                  
                  {/* Scanline effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                    <div className="absolute w-full h-0.5 bg-primary/80 shadow-[0_0_10px_hsl(var(--primary))] animate-pulse"
                         style={{
                           top: '30%',
                           animation: 'pulse 2s ease-in-out infinite'
                         }} />
                    <div className="absolute w-full h-0.5 bg-primary/60 shadow-[0_0_8px_hsl(var(--primary))] animate-pulse"
                         style={{
                           top: '70%',
                           animation: 'pulse 2.5s ease-in-out infinite reverse'
                         }} />
                  </div>
                  
                  {/* Data stream particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-px h-3 bg-primary/70 shadow-[0_0_4px_hsl(var(--primary))]"
                        style={{
                          left: `${10 + i * 10}%`,
                          animation: `fadeInOut 1.5s ease-in-out infinite`,
                          animationDelay: `${i * 200}ms`,
                          transform: `translateY(${Math.sin(i) * 20}px)`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="p-3 space-y-2 relative z-10 group-hover:bg-black/20 transition-colors duration-500">
                  <div>
                    <h3 className="font-hardrace text-white font-bold text-sm overflow-hidden">
                      <span className="block group-hover:animate-pulse transition-all duration-300 group-hover:tracking-widest group-hover:text-primary relative">
                        {artist.name.split('').map((letter, i) => (
                          <span
                            key={i}
                            className="inline-block transition-transform duration-300 group-hover:scale-110"
                            style={{
                              animationDelay: `${i * 50}ms`,
                              transform: `translateY(${Math.sin(i + Date.now() / 1000) * 2}px)`
                            }}
                          >
                            {letter}
                          </span>
                        ))}
                      </span>
                    </h3>
                    <p className="text-xs font-tech text-primary uppercase tracking-wide group-hover:tracking-[0.3em] transition-all duration-500 relative overflow-hidden">
                      <span className="block group-hover:animate-pulse">
                        {artist.genre}
                      </span>
                      {/* Glitch underline */}
                      <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-700 shadow-[0_0_8px_hsl(var(--primary))]" />
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs font-tech text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">
                    <span className="relative">
                      {artist.followers}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse bg-primary/5 rounded" />
                    </span>
                    <span className="relative">
                      {artist.releases} releases
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse bg-primary/5 rounded" />
                    </span>
                  </div>
                  
                </div>
                
                {/* Holographic border effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl"
                       style={{
                         background: `linear-gradient(45deg, transparent 30%, hsl(var(--primary) / 0.3) 50%, transparent 70%)`,
                         animation: 'shimmer 2s ease-in-out infinite'
                       }} />
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
            <div className="grid grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-hardrace text-primary glow-text">9</div>
                <div className="text-sm font-tech text-muted-foreground uppercase tracking-wider">Artistes</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-hardrace text-primary glow-text">107</div>
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