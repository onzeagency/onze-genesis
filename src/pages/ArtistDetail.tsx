import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Download, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Same artists data as in Artists.tsx
const artists = [
  {
    id: 1,
    slug: 'artist-1',
    name: 'NEXUS',
    genre: 'Techno Underground',
    description: 'Pionnier du son underground avec des beats hypnotiques',
    image: '/placeholder.svg',
    bio: 'NEXUS est un producteur visionnaire qui repousse les limites de la musique électronique underground. Avec plus de 10 ans d\'expérience, il a développé un style unique qui mélange techno industrielle et éléments ambient.',
    albums: ['Dark Pulse', 'Underground Sessions', 'Digital Void'],
    tracks: [
      { name: 'Pulse Generator', duration: '6:42' },
      { name: 'Underground Flow', duration: '7:15' },
      { name: 'Digital Dreams', duration: '5:38' }
    ],
    social: {
      soundcloud: '#',
      spotify: '#',
      instagram: '#'
    }
  },
  {
    id: 2,
    slug: 'artist-2', 
    name: 'VOID',
    genre: 'Dark Electronic',
    description: 'Explorateur des profondeurs sonores les plus sombres',
    image: '/placeholder.svg',
    bio: 'VOID explore les territoires les plus sombres de l\'électronique, créant des paysages sonores qui transportent l\'auditeur dans des dimensions parallèles.',
    albums: ['Abyss', 'Shadow Realm', 'Dark Matter'],
    tracks: [
      { name: 'Into the Void', duration: '8:20' },
      { name: 'Shadow Dance', duration: '6:55' },
      { name: 'Dark Energy', duration: '7:42' }
    ],
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="aspect-square bg-card rounded-lg overflow-hidden">
              <img 
                src={artist.image} 
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <h1 className="text-6xl font-hardrace text-primary mb-4 glow-text">
                {artist.name}
              </h1>
              <p className="text-2xl text-foreground mb-4">{artist.genre}</p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {artist.bio}
              </p>
              
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
                    <div key={index} className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
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
                    <div key={index} className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                      <div>
                        <div className="font-medium">{track.name}</div>
                        <div className="text-sm text-muted-foreground">{track.duration}</div>
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