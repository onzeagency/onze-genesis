import { useState } from 'react';
import Navigation from '@/components/Navigation';
import TechnoGrid from '@/components/TechnoGrid';
import GlitchText from '@/components/GlitchText';

const upcomingEvents = [
  {
    id: 1,
    title: 'ONZE NIGHT VOL.1',
    date: '2025-02-15',
    time: '23:00',
    location: 'Underground Warehouse, Paris 19ème',
    description: 'Première soirée officielle du label dans un lieu industriel secret. Expérience immersive avec installations visuelles cyberpunk.',
    lineup: ['NEXUS', 'VOID', 'PULSE', 'MATRIX'],
    price: '15€ en prévente / 20€ sur place',
    capacity: '300 personnes',
    status: 'tickets-available',
    image: '/placeholder.svg',
    genres: ['Techno Underground', 'Dark Electronic', 'Industrial']
  },
  {
    id: 2,
    title: 'UNDERGROUND SESSIONS #1',
    date: '2025-01-28',
    time: '20:00',
    location: 'Studio ONZE, Paris 11ème',
    description: 'Session intime avec performances live et DJ sets exclusifs. Rencontre avec les artistes et découverte des nouveaux talents.',
    lineup: ['ECHO', 'CIPHER', 'GHOST'],
    price: '10€ avec consommation',
    capacity: '80 personnes',
    status: 'sold-out',
    image: '/placeholder.svg',
    genres: ['Ambient Electronic', 'Minimal Techno', 'Dark Ambient']
  },
  {
    id: 3,
    title: 'ACID REVOLUTION',
    date: '2025-03-22',
    time: '22:00',
    location: 'Le Bataclan, Paris',
    description: 'Soirée spéciale acid techno avec NOVA et invités internationaux. Célébration des 30 ans de la TB-303.',
    lineup: ['NOVA', 'STORM', 'Special Guests'],
    price: '25€ en prévente / 30€ sur place',
    capacity: '1500 personnes',
    status: 'soon',
    image: '/placeholder.svg',
    genres: ['Acid Techno', 'Hardcore Techno']
  },
  {
    id: 4,
    title: 'CYBERPUNK FESTIVAL',
    date: '2025-06-21',
    time: '18:00',
    location: 'Parc de la Villette, Paris',
    description: 'Festival en plein air mêlant musique électronique, art numérique et réalité virtuelle. Plusieurs scènes thématiques.',
    lineup: ['Tous les artistes ONZE', 'Invités internationaux'],
    price: '35€ pass journée / 60€ pass weekend',
    capacity: '5000 personnes',
    status: 'soon',
    image: '/placeholder.svg',
    genres: ['All Electronic Genres']
  }
];

const pastEvents = [
  {
    id: 1,
    title: 'ONZE LAUNCH PARTY',
    date: '2024-12-01',
    location: 'Rex Club, Paris',
    description: 'Soirée de lancement du label avec tous nos artistes fondateurs.',
    attendance: '400 personnes',
    highlights: ['Première performance de NEXUS', 'Release party ONZE001', 'Networking underground']
  },
  {
    id: 2,
    title: 'DARK ELECTRONIC NIGHT',
    date: '2024-11-15',
    location: 'Concrete, Paris',
    description: 'Exploration des territoires sombres de l\'électronique avec VOID et GHOST.',
    attendance: '600 personnes',
    highlights: ['Set ambient exclusif', 'Visuals immersifs', 'After until sunrise']
  },
  {
    id: 3,
    title: 'INDUSTRIAL SHOWCASE',
    date: '2024-10-28',
    location: 'Glazart, Paris',
    description: 'Showcase dédié à l\'industrial techno avec PULSE et invités.',
    attendance: '350 personnes',
    highlights: ['Live performance PULSE', 'Installation sonore', 'Networking artists']
  }
];

const venues = [
  {
    name: 'Studio ONZE',
    location: 'Paris 11ème',
    capacity: '80 personnes',
    description: 'Notre studio privé transformé en lieu d\'événements intimes.',
    features: ['Système son Funktion-One', 'Ambiance industrielle', 'Bar privé']
  },
  {
    name: 'Underground Warehouse',
    location: 'Paris 19ème',
    capacity: '300 personnes',
    description: 'Entrepôt industriel reconverti pour nos grandes soirées.',
    features: ['Espace modulable', 'Installations lumière', 'Parkings gratuits']
  },
  {
    name: 'Partenaires Clubs',
    location: 'Paris & Banlieue',
    capacity: 'Variable',
    description: 'Réseau de clubs partenaires pour nos événements spéciaux.',
    features: ['Rex Club', 'Concrete', 'Glazart', 'Machine du Moulin Rouge']
  }
];

const Events = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('upcoming');

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'tickets-available': return 'text-primary';
      case 'sold-out': return 'text-destructive';
      case 'soon': return 'text-accent';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'tickets-available': return 'BILLETS DISPONIBLES';
      case 'sold-out': return 'COMPLET';
      case 'soon': return 'BIENTÔT DISPONIBLE';
      default: return 'TBA';
    }
  };

  return (
    <div className="bg-background relative min-h-screen" onMouseMove={handleMouseMove}>
      <Navigation activeSection="events" />
      <TechnoGrid className="fixed inset-0 z-0 opacity-10" />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <GlitchText 
              text="EVENTS" 
              className="text-7xl font-hardrace font-bold glow-text"
            />
            <p className="text-xl font-tech text-muted-foreground leading-relaxed">
              Rejoignez-nous pour des expériences underground inoubliables. ONZE organise des événements 
              qui marquent la scène musicale alternative et repoussent les limites de l'expérience clubbing.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 bg-gradient-to-r from-muted/5 to-muted/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8 mb-16">
            {[
              { id: 'upcoming', label: 'À VENIR' },
              { id: 'past', label: 'ÉVÉNEMENTS PASSÉS' },
              { id: 'venues', label: 'NOS LIEUX' }
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
          {/* Upcoming Events Tab */}
          {activeTab === 'upcoming' && (
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="space-y-8">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="holo-card overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      {/* Event Image */}
                      <div className="relative h-64 lg:h-auto">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 lg:to-transparent" />
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 text-xs font-tech font-medium rounded ${getStatusColor(event.status)} bg-background/90`}>
                            {getStatusText(event.status)}
                          </span>
                        </div>
                      </div>
                      
                      {/* Event Details */}
                      <div className="lg:col-span-2 p-8 space-y-6">
                        <div>
                          <h3 className="text-3xl font-tech font-bold text-primary glow-text mb-2">{event.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm font-tech text-muted-foreground">
                            <span>📅 {event.date}</span>
                            <span>🕙 {event.time}</span>
                            <span>📍 {event.location}</span>
                            <span>👥 {event.capacity}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground font-tech leading-relaxed">{event.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-tech text-primary mb-3 font-bold">LINE-UP</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.lineup.map((artist, index) => (
                                <span key={index} className="px-3 py-1 bg-card text-primary text-sm font-tech border border-primary/30 rounded">
                                  {artist}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-tech text-primary mb-3 font-bold">GENRES</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.genres.map((genre, index) => (
                                <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm font-tech rounded">
                                  {genre}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center pt-6 border-t border-primary/20">
                          <div>
                            <p className="text-lg font-tech text-primary font-bold">{event.price}</p>
                          </div>
                          <button 
                            className={`cyber-button ${event.status === 'sold-out' ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={event.status === 'sold-out' || event.status === 'soon'}
                          >
                            <span>
                              {event.status === 'sold-out' ? 'COMPLET' : 
                               event.status === 'soon' ? 'BIENTÔT' : 'ACHETER BILLETS'}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Events Tab */}
          {activeTab === 'past' && (
            <div className="max-w-6xl mx-auto space-y-8">
              <h3 className="text-4xl font-tech font-bold text-center text-primary mb-12 glow-text">
                ÉVÉNEMENTS PASSÉS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <div key={event.id} className="holo-card p-6 space-y-4">
                    <div>
                      <h4 className="text-xl font-tech text-primary font-bold mb-2">{event.title}</h4>
                      <div className="text-sm font-tech text-muted-foreground space-y-1">
                        <p>📅 {event.date}</p>
                        <p>📍 {event.location}</p>
                        <p>👥 {event.attendance}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground font-tech text-sm">{event.description}</p>
                    
                    <div>
                      <h5 className="text-sm font-tech text-primary font-bold mb-2">HIGHLIGHTS</h5>
                      <ul className="text-xs font-tech text-muted-foreground space-y-1">
                        {event.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <span className="text-primary">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Venues Tab */}
          {activeTab === 'venues' && (
            <div className="max-w-6xl mx-auto space-y-8">
              <h3 className="text-4xl font-tech font-bold text-center text-primary mb-12 glow-text">
                NOS LIEUX PARTENAIRES
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {venues.map((venue, index) => (
                  <div key={index} className="holo-card p-6 space-y-4">
                    <div>
                      <h4 className="text-xl font-tech text-primary font-bold mb-2">{venue.name}</h4>
                      <div className="text-sm font-tech text-muted-foreground space-y-1">
                        <p>📍 {venue.location}</p>
                        <p>👥 {venue.capacity}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground font-tech text-sm">{venue.description}</p>
                    
                    <div>
                      <h5 className="text-sm font-tech text-primary font-bold mb-2">CARACTÉRISTIQUES</h5>
                      <ul className="text-xs font-tech text-muted-foreground space-y-1">
                        {venue.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="text-primary">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 border-t border-primary/20 bg-gradient-to-b from-background to-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h3 className="text-3xl font-tech font-bold text-primary glow-text">
              RESTEZ CONNECTÉS
            </h3>
            <p className="text-muted-foreground font-tech">
              Abonnez-vous à notre newsletter pour être informés en priorité de nos événements 
              et bénéficier de tarifs préférentiels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 bg-card border border-primary/30 text-foreground font-tech text-sm focus:border-primary outline-none"
              />
              <button className="cyber-button">
                <span>S'ABONNER</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;