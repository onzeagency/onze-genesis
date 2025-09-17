import React from 'react';
import onzeLogo from '@/assets/onze-logo.svg';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Artists', href: '#artists', sectionId: 'artists', page: '/artists' },
    { label: 'Label', href: '#label', sectionId: 'label', page: '/label' },
    { label: 'Merch', href: '#merch', sectionId: 'merch', page: '/merch' },
    { label: 'Events', href: '#events', sectionId: 'events', page: '/events' },
    { label: 'About Us', href: '#about', sectionId: 'about', page: '/about-us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-2 bg-background/90 backdrop-blur-md border-b border-primary/20">
      <div className="flex justify-between items-center">
        {/* ONZE Logo */}
        <a
          href="#home"
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
                className={`nav-item relative ${
                  activeSection === item.sectionId ? 'text-primary shadow-neon' : 'text-muted-foreground'
                }`}
              >
                {item.label}
                {activeSection === item.sectionId && (
                  <div className="absolute -inset-2 opacity-50 -z-10" style={{ background: 'var(--gradient-cyber)' }} />
                )}
              </a>
              {/* Dropdown for page link */}
              <div className="absolute top-full left-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <a
                  href={item.page}
                  className="block bg-card border border-primary/30 px-4 py-2 text-xs font-tech text-primary hover:bg-primary/10 transition-colors whitespace-nowrap"
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