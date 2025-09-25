import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Download, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import artistExample1 from '@/assets/artist-example-1.jpg';
import artistExample2 from '@/assets/artist-example-2.jpg';

// Same artists data as in Artists.tsx
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
    releases: 15,
    albums: ['Dark Pulse', 'Underground Sessions', 'Digital Void'],
    social: {
      soundcloud: '#',
      spotify: '#',
      instagram: '#'
    }
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
    releases: 12,
    albums: ['Abyss', 'Shadow Realm', 'Dark Matter'],
    social: {
      soundcloud: '#',
      spotify: '#',
      instagram: '#'
    }
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
    releases: 18,
    albums: ['Industrial Revolution', 'Steel Dreams', 'Urban Warfare'],
    social: {
      soundcloud: '#',
      spotify: '#',
      instagram: '#'
    }
  }
  // Add more artists as needed...
];

const ArtistDetail = () => {
  const { slug } = useParams();
  const artist = artists.find(a => a.slug === slug);

  if (!artist) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-tech text-primary mb-4">Artiste non trouvé</h1>
          <Link to="/artists" className="text-primary hover:text-foreground">
            Retour aux artistes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <Navigation activeSection="artists" />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-8">
          {/* Back button */}
          <Link 
            to="/artists" 
            className="inline-flex items-center text-primary hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux artistes
          </Link>

          {/* Artist header */}
          <div className="relative mb-16">
            <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-3xl">
              <img 
                src={artist.image} 
                alt={artist.name}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Artist info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="max-w-4xl">
                  <p className="text-sm font-tech text-primary font-medium uppercase tracking-widest mb-4">
                    {artist.genre}
                  </p>
                  <h1 className="text-6xl lg:text-8xl font-hardrace text-white font-bold glow-text mb-6">
                    {artist.name}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                    {artist.bio}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex gap-8 mb-8 text-sm font-tech text-muted-foreground">
                    <div>
                      <span className="text-primary font-bold text-lg">{artist.followers}</span>
                      <br />
                      <span className="uppercase tracking-wide">Followers</span>
                    </div>
                    <div>
                      <span className="text-primary font-bold text-lg">{artist.releases}</span>
                      <br />
                      <span className="uppercase tracking-wide">Releases</span>
                    </div>
                  </div>
                  
                  {/* Social links */}
                  <div className="flex gap-4">
                    <Button variant="outline" asChild>
                      <a href={artist.social.soundcloud} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        SoundCloud
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={artist.social.spotify} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Spotify
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={artist.social.instagram} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Instagram
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Corner brackets */}
              <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-primary" />
              <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-primary" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-primary" />
            </div>
          </div>

          {/* Discography and tracks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Albums */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Discographie</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {artist.albums.map((album, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-card/50 rounded-2xl">
                      <span className="font-medium">{album}</span>
                      <Button size="sm" variant="ghost">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top tracks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Tracks Populaires</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {artist.tracks.map((track, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-card/50 rounded-2xl">
                      <div>
                        <div className="font-medium">{track}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Play className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;