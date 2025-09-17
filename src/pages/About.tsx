import { useState } from 'react';
import Navigation from '@/components/Navigation';
import TechnoGrid from '@/components/TechnoGrid';
import GlitchText from '@/components/GlitchText';

const team = [
  {
    id: 1,
    name: 'ALEX CYBER',
    role: 'Founder & A&R',
    image: '/placeholder.svg',
    bio: 'Visionnaire du label et découvreur de talents underground depuis 2018. Passionné de techno industrielle et de culture cyberpunk.',
    fullBio: 'Alex a commencé sa carrière dans la musique électronique en organisant des soirées underground dans les squats parisiens. Sa vision unique de la scène l\'a mené à créer ONZE, un label qui refuse les compromis commerciaux. Expert en A&R, il découvre et développe les talents les plus prometteurs de la scène alternative.',
    expertise: ['A&R', 'Event Management', 'Underground Culture', 'Music Curation'],
    social: { soundcloud: '@alexcyber', instagram: '@alex_cyber_onze' }
  },
  {
    id: 2,
    name: 'MAYA TECH',
    role: 'Creative Director',
    image: '/placeholder.svg',
    bio: 'Architecte de l\'identité visuelle et créative du label. Spécialiste en design cyberpunk et direction artistique.',
    fullBio: 'Diplômée des Beaux-Arts de Paris, Maya fusionne art contemporain et esthétique cyberpunk. Elle crée l\'univers visuel unique d\'ONZE, des pochettes d\'albums aux installations pour nos événements. Son travail a été exposé dans plusieurs galeries parisiennes.',
    expertise: ['Graphic Design', 'Visual Identity', 'Art Direction', 'Digital Art'],
    social: { instagram: '@mayatech_design', behance: 'mayatech' }
  },
  {
    id: 3,
    name: 'JULES SOUND',
    role: 'Sound Engineer',
    image: '/placeholder.svg',
    bio: 'Maître du son et responsable de la qualité audio. 15 ans d\'expérience dans l\'ingénierie sonore électronique.',
    fullBio: 'Formé dans les plus grands studios parisiens, Jules maîtrise tous les aspects de la production audio. De l\'enregistrement au mastering, il garantit l\'excellence technique de chaque release ONZE. Il travaille également sur des installations sonores pour nos événements immersifs.',
    expertise: ['Audio Engineering', 'Mastering', 'Sound Design', 'Studio Production'],
    social: { soundcloud: '@julessound_master', linkedin: 'jules-soundeng' }
  },
  {
    id: 4,
    name: 'SARA EVENTS',
    role: 'Event Manager',
    image: '/placeholder.svg',
    bio: 'Organisatrice d\'événements underground et créatrice d\'expériences immersives uniques.',
    fullBio: 'Sara transforme chaque événement ONZE en expérience mémorable. Spécialiste des lieux atypiques et des installations immersives, elle crée des soirées qui marquent la scène parisienne. Son réseau dans l\'underground lui permet d\'accéder aux lieux les plus exclusifs.',
    expertise: ['Event Management', 'Venue Sourcing', 'Experience Design', 'Production'],
    social: { instagram: '@sara_events_onze', facebook: 'saraevents' }
  },
  {
    id: 5,
    name: 'RICK DIGITAL',
    role: 'Digital Marketing',
    image: '/placeholder.svg',
    bio: 'Expert en marketing digital et réseaux sociaux. Spécialiste de la promotion underground.',
    fullBio: 'Rick développe la présence digitale d\'ONZE avec une approche authentique qui respecte l\'esprit underground. Il maîtrise les codes de la scène alternative et sait comment toucher notre communauté sans trahir nos valeurs.',
    expertise: ['Digital Marketing', 'Social Media', 'Community Management', 'Analytics'],
    social: { twitter: '@rickdigital_onze', instagram: '@rick_digital' }
  },
  {
    id: 6,
    name: 'LUNA CODE',
    role: 'Developer & Tech',
    image: '/placeholder.svg',
    bio: 'Développeuse full-stack et responsable technique. Créatrice de nos outils digitaux innovants.',
    fullBio: 'Luna développe toute l\'infrastructure technique d\'ONZE, de notre site web aux applications mobile. Passionnée par l\'intersection entre technologie et art, elle crée des outils innovants pour nos artistes et notre communauté.',
    expertise: ['Web Development', 'Mobile Apps', 'Tech Innovation', 'Digital Tools'],
    social: { github: '@lunacode', twitter: '@luna_code_dev' }
  }
];

const timeline = [
  {
    year: '2024',
    month: 'Janvier',
    title: 'NAISSANCE D\'ONZE',
    description: 'Création du label avec une vision claire : révolutionner la scène underground parisienne.',
    details: 'Alex Cyber fonde ONZE après plusieurs années d\'observation de la scène électronique. Le projet naît d\'une frustration : trop de labels sacrifient l\'authenticité pour le commercial.'
  },
  {
    year: '2024',
    month: 'Mars',
    title: 'PREMIÈRE ÉQUIPE',
    description: 'Recrutement de Maya Tech et Jules Sound, formation du noyau créatif.',
    details: 'L\'équipe fondatrice se forme autour de valeurs communes : exigence artistique, innovation technique et respect de la culture underground.'
  },
  {
    year: '2024',
    month: 'Juin',
    title: 'STUDIO ONZE',
    description: 'Ouverture de notre studio d\'enregistrement et espace événementiel.',
    details: 'Installation dans un ancien entrepôt du 11ème arrondissement, transformé en studio high-tech avec esthétique industrielle.'
  },
  {
    year: '2024',
    month: 'Septembre',
    title: 'PREMIERS ARTISTES',
    description: 'Signature de NEXUS, VOID et PULSE, nos artistes fondateurs.',
    details: 'Trois artistes aux univers distincts mais unis par une vision commune de l\'électronique underground.'
  },
  {
    year: '2024',
    month: 'Octobre',
    title: 'ONZE001',
    description: 'Sortie de notre premier EP "Dark Protocol" par NEXUS.',
    details: 'Le premier release établit immédiatement le niveau d\'exigence artistique et technique du label.'
  },
  {
    year: '2024',
    month: 'Décembre',
    title: 'LAUNCH PARTY',
    description: 'Soirée de lancement légendaire au Rex Club avec 400 personnes.',
    details: 'La soirée de lancement confirme notre place sur la scène parisienne et attire l\'attention internationale.'
  },
  {
    year: '2025',
    month: 'Prévisions',
    title: 'EXPANSION INTERNATIONALE',
    description: 'Développement vers Berlin, Londres et Amsterdam.',
    details: 'L\'année 2025 marquera notre expansion européenne avec des partenariats dans les capitales underground.'
  }
];

const partners = [
  {
    name: 'Rex Club',
    type: 'Venue Partner',
    description: 'Club emblématique de la scène techno parisienne',
    logo: '/placeholder.svg'
  },
  {
    name: 'Concrete',
    type: 'Venue Partner', 
    description: 'Référence de l\'underground sur péniche',
    logo: '/placeholder.svg'
  },
  {
    name: 'Glazart',
    type: 'Venue Partner',
    description: 'Lieu alternatif incontournable',
    logo: '/placeholder.svg'
  },
  {
    name: 'Funktion-One',
    type: 'Tech Partner',
    description: 'Système son de référence mondiale',
    logo: '/placeholder.svg'
  },
  {
    name: 'Pioneer DJ',
    type: 'Tech Partner',
    description: 'Équipement DJ professionnel',
    logo: '/placeholder.svg'
  },
  {
    name: 'Ableton',
    type: 'Software Partner',
    description: 'Production musicale de pointe',
    logo: '/placeholder.svg'
  }
];

const values = [
  {
    icon: '🎵',
    title: 'AUTHENTICITÉ',
    description: 'Nous privilégions l\'art authentique aux tendances commerciales',
    detail: 'Chaque artiste signé chez ONZE apporte sa vision unique sans compromis commercial.'
  },
  {
    icon: '🚀',
    title: 'INNOVATION',
    description: 'Repousser les limites créatives et techniques',
    detail: 'De la production aux performances live, nous explorons constamment de nouveaux territoires.'
  },
  {
    icon: '🤝',
    title: 'COMMUNAUTÉ',
    description: 'Créer des liens durables dans la scène underground',
    detail: 'ONZE est plus qu\'un label, c\'est une famille d\'artistes et de passionnés.'
  },
  {
    icon: '🔥',
    title: 'PASSION',
    description: 'L\'amour de la musique électronique avant tout',
    detail: 'Notre motivation principale reste la passion pour la musique et la culture underground.'
  },
  {
    icon: '⚡',
    title: 'QUALITÉ',
    description: 'Excellence technique et artistique sans compromis',
    detail: 'Chaque release, chaque événement respecte nos standards les plus élevés.'
  },
  {
    icon: '🌐',
    title: 'OUVERTURE',
    description: 'Accueillir tous les talents sans discrimination',
    detail: 'ONZE est ouvert à tous les artistes authentiques, quelle que soit leur origine.'
  }
];

const About = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('story');
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="bg-background relative min-h-screen" onMouseMove={handleMouseMove}>
      <Navigation activeSection="about" />
      <TechnoGrid className="fixed inset-0 z-0 opacity-10" />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <GlitchText 
              text="ABOUT US" 
              className="text-7xl font-hardrace font-bold glow-text"
            />
            <p className="text-xl font-tech text-muted-foreground leading-relaxed">
              ONZE est né de la passion pour la musique authentique et l'art sans compromis. 
              Nous sommes une famille d'artistes, de créateurs et de rêveurs unis par l'amour de l'underground.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8 mb-16 flex-wrap gap-4">
            {[
              { id: 'story', label: 'NOTRE HISTOIRE' },
              { id: 'team', label: 'L\'ÉQUIPE' },
              { id: 'values', label: 'NOS VALEURS' },
              { id: 'partners', label: 'PARTENAIRES' }
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
          {/* Story Tab */}
          {activeTab === 'story' && (
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="text-center space-y-8">
                <h3 className="text-4xl font-tech font-bold text-primary glow-text">
                  L'HISTOIRE D'ONZE
                </h3>
                <p className="text-lg font-tech text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Fondé en 2024, ONZE est né de la volonté de créer un espace où l'authenticité 
                  prime sur les tendances commerciales. Nous croyons en la puissance de la musique 
                  underground pour transformer les mentalités et créer des connexions profondes.
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-8">
                {timeline.map((event, index) => (
                  <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="lg:w-1/4 text-center lg:text-right space-y-2">
                      <div className="text-4xl font-hardrace text-primary glow-text">{event.year}</div>
                      <div className="text-lg font-tech text-accent">{event.month}</div>
                    </div>
                    
                    <div className="lg:w-1/2 relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-primary lg:block hidden"></div>
                      <div className="absolute left-0 top-4 w-4 h-4 bg-primary rounded-full transform -translate-x-1.5 shadow-neon lg:block hidden"></div>
                      <div className="lg:pl-8 holo-card p-6 space-y-4">
                        <h4 className="text-xl font-tech text-primary font-bold">{event.title}</h4>
                        <p className="text-muted-foreground font-tech">{event.description}</p>
                        <p className="text-sm font-tech text-muted-foreground leading-relaxed">{event.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Statistics */}
              <div className="holo-card p-8">
                <h4 className="text-2xl font-tech font-bold text-center text-primary mb-8 glow-text">
                  ONZE EN CHIFFRES
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="space-y-2">
                    <div className="text-4xl font-hardrace text-primary glow-text">12</div>
                    <div className="text-sm font-tech text-muted-foreground uppercase">Artistes signés</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-hardrace text-primary glow-text">47</div>
                    <div className="text-sm font-tech text-muted-foreground uppercase">Événements</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-hardrace text-primary glow-text">147</div>
                    <div className="text-sm font-tech text-muted-foreground uppercase">Releases</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-hardrace text-primary glow-text">25K</div>
                    <div className="text-sm font-tech text-muted-foreground uppercase">Communauté</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="max-w-6xl mx-auto space-y-8">
              <h3 className="text-4xl font-tech font-bold text-center text-primary mb-12 glow-text">
                L'ÉQUIPE ONZE
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member) => (
                  <div 
                    key={member.id} 
                    className="holo-card group overflow-hidden cursor-pointer"
                    onClick={() => setSelectedMember(member.id)}
                  >
                    <div className="aspect-square bg-gradient-to-br from-card to-background overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="text-xl font-tech text-primary font-bold">{member.name}</h4>
                        <p className="text-accent font-tech font-medium">{member.role}</p>
                      </div>
                      <p className="text-muted-foreground font-tech text-sm leading-relaxed">{member.bio}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.slice(0, 2).map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-card text-primary text-xs font-tech border border-primary/30 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-xs font-tech text-primary hover:text-primary-intense transition-colors">
                        VOIR PROFIL COMPLET →
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Values Tab */}
          {activeTab === 'values' && (
            <div className="max-w-6xl mx-auto space-y-8">
              <h3 className="text-4xl font-tech font-bold text-center text-primary mb-12 glow-text">
                NOS VALEURS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="holo-card p-8 text-center space-y-4 group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h4 className="text-xl font-tech text-primary font-bold">{value.title}</h4>
                    <p className="text-muted-foreground font-tech">{value.description}</p>
                    <p className="text-sm font-tech text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {value.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Partners Tab */}
          {activeTab === 'partners' && (
            <div className="max-w-6xl mx-auto space-y-8">
              <h3 className="text-4xl font-tech font-bold text-center text-primary mb-12 glow-text">
                NOS PARTENAIRES
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <div key={index} className="holo-card p-6 text-center space-y-4">
                    <div className="h-16 bg-card rounded flex items-center justify-center mb-4">
                      <img src={partner.logo} alt={partner.name} className="max-h-12 max-w-24 object-contain" />
                    </div>
                    <div>
                      <h4 className="text-lg font-tech text-primary font-bold">{partner.name}</h4>
                      <p className="text-accent font-tech text-sm">{partner.type}</p>
                    </div>
                    <p className="text-muted-foreground font-tech text-sm">{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="holo-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const member = team.find(m => m.id === selectedMember);
              if (!member) return null;
              
              return (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full aspect-square object-cover rounded"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-tech text-primary font-bold glow-text">{member.name}</h2>
                      <p className="text-xl font-tech text-accent font-medium">{member.role}</p>
                    </div>
                    
                    <p className="text-muted-foreground font-tech leading-relaxed">{member.fullBio}</p>
                    
                    <div>
                      <h4 className="text-lg font-tech text-primary font-bold mb-3">EXPERTISES</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-card text-primary text-sm font-tech border border-primary/30 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-tech text-primary font-bold mb-3">RÉSEAUX</h4>
                      <div className="space-y-2 text-sm font-tech text-muted-foreground">
                        {Object.entries(member.social).map(([platform, handle]) => (
                          <p key={platform}>
                            <span className="text-primary capitalize">{platform}:</span> {handle}
                          </p>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedMember(null)}
                      className="cyber-button w-full"
                    >
                      <span>FERMER</span>
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-16 border-t border-primary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-3xl font-tech font-bold text-primary glow-text">
              CONTACTEZ-NOUS
            </h3>
            <p className="text-muted-foreground font-tech">
              Une question ? Un projet ? Une proposition artistique ? 
              L'équipe ONZE est là pour vous répondre.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="holo-card p-6 space-y-3">
                <h4 className="text-lg font-tech text-primary font-bold">GÉNÉRAL</h4>
                <p className="text-sm font-tech text-muted-foreground">contact@onze-label.com</p>
                <p className="text-xs font-tech text-muted-foreground">Questions générales et partenariats</p>
              </div>
              
              <div className="holo-card p-6 space-y-3">
                <h4 className="text-lg font-tech text-primary font-bold">DÉMOS</h4>
                <p className="text-sm font-tech text-muted-foreground">demos@onze-label.com</p>
                <p className="text-xs font-tech text-muted-foreground">Soumissions artistiques uniquement</p>
              </div>
              
              <div className="holo-card p-6 space-y-3">
                <h4 className="text-lg font-tech text-primary font-bold">BOOKING</h4>
                <p className="text-sm font-tech text-muted-foreground">booking@onze-label.com</p>
                <p className="text-xs font-tech text-muted-foreground">Réservations et événements</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;