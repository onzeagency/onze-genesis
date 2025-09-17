import React from 'react';
import onzeLogo from '@/assets/onze-logo.svg';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Artists', href: '#artists', sectionId: 'artists', page: '/artists' },
    { label: 'Merch', href: '#merch', sectionId: 'merch', page: '/merch' },
    { label: 'Label', href: '#label', sectionId: 'label', page: '/label' },
    { label: 'Events', href: '#events', sectionId: 'events', page: '/events' },
    { label: 'About Us', href: '#about', sectionId: 'about', page: '/about-us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-2 bg-background/90 backdrop-blur-md border-b border-primary/20">
      <div className="flex justify-between items-center">
        {/* ONZE Logo */}
        <a
          href="/"
          className="transition-transform hover:scale-105 relative"
        >
          <img 
            src={onzeLogo} 
            alt="ONZE" 
            className="w-10 h-10 bg-transparent animate-cyber-pulse"
            style={{
              filter: 'drop-shadow(0 0 15px hsl(312 100% 50% / 0.6))'
            }}
          />
        </a>

        {/* Navigation Menu */}
        <nav className="flex space-x-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className={`relative px-4 py-2 text-xs font-tech font-medium tracking-[0.2em] uppercase transition-all duration-500 cursor-pointer overflow-hidden block ${
                  activeSection === item.sectionId 
                    ? 'text-white' 
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                {/* Liquid morphing background */}
                <div className={`absolute inset-0 transition-all duration-700 ease-out transform ${
                  activeSection === item.sectionId
                    ? 'scale-100 opacity-100'
                    : 'scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-80'
                }`}
                     style={{
                       background: `radial-gradient(ellipse at center, hsl(var(--primary) / 0.8) 0%, hsl(var(--primary) / 0.4) 50%, transparent 70%)`,
                       borderRadius: '50px',
                       filter: 'blur(8px)'
                     }} />
                
                {/* Morphing border */}
                <div className={`absolute inset-0 rounded-full border transition-all duration-500 ${
                  activeSection === item.sectionId
                    ? 'border-primary/60 scale-100'
                    : 'border-primary/20 scale-90 group-hover:border-primary/40 group-hover:scale-100'
                }`}
                     style={{
                       background: 'linear-gradient(45deg, transparent, hsl(var(--primary) / 0.1), transparent)',
                       animation: activeSection === item.sectionId ? 'shimmer 3s ease-in-out infinite' : 'none'
                     }} />
                
                {/* Floating energy particles */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  activeSection === item.sectionId ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                }`}>
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      style={{
                        left: `${30 + i * 20}%`,
                        top: `${40 + Math.sin(i) * 20}%`,
                        animation: `float 2s ease-in-out infinite`,
                        animationDelay: `${i * 0.7}s`,
                        boxShadow: '0 0 6px hsl(var(--primary))'
                      }}
                    />
                  ))}
                </div>
                
                {/* Text with liquid distortion */}
                <span className={`relative z-10 transition-all duration-300 ${
                  activeSection === item.sectionId
                    ? 'drop-shadow-[0_0_12px_hsl(var(--primary))] tracking-[0.3em]'
                    : 'group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))] group-hover:tracking-[0.25em]'
                }`}>
                  {item.label}
                </span>
                
                {/* Liquid underflow */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out ${
                  activeSection === item.sectionId
                    ? 'w-full h-1 rounded-full bg-primary/80 shadow-[0_0_15px_hsl(var(--primary))]'
                    : 'w-0 group-hover:w-3/4 h-0.5 rounded-full bg-primary/60 group-hover:shadow-[0_0_10px_hsl(var(--primary))]'
                }`}
                     style={{
                       background: activeSection === item.sectionId 
                         ? 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)'
                         : 'hsl(var(--primary))'
                     }} />
              </a>
              
              {/* Dropdown for page link */}
              <div className="absolute top-full left-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <a
                  href={item.page}
                  className="block bg-card border border-primary/30 px-4 py-2 text-xs font-tech text-primary hover:bg-primary/10 transition-colors whitespace-nowrap rounded-lg backdrop-blur-md"
                >
                  PAGE COMPLÈTE →
                </a>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;