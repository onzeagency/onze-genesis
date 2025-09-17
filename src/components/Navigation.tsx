import { Link, useLocation } from 'react-router-dom';
import onzeLogo from '@/assets/onze-logo.svg';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Artists', href: '/artists', sectionId: 'artists' },
    { label: 'Label', href: '/label', sectionId: 'label' },
    { label: 'Merch', href: '/merch', sectionId: 'merch' },
    { label: 'Events', href: '/events', sectionId: 'events' },
    { label: 'About Us', href: '/about-us', sectionId: 'about' },
  ];

  const scrollToSection = (sectionId: string, href: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      // Update URL
      window.history.pushState(null, '', href);
    }
  };

  return (
      <header className="fixed top-0 left-0 right-0 z-40 p-2 bg-background/80 backdrop-blur-sm border-b border-primary/10">
        <div className="flex justify-between items-center">
          {/* ONZE Logo */}
          <button
            onClick={() => scrollToSection('home', '/')}
            className="transition-transform hover:scale-105"
          >
            <img 
              src={onzeLogo} 
              alt="ONZE" 
              className="w-16 h-16 bg-transparent"
            />
          </button>

          {/* Navigation Menu */}
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.sectionId, item.href)}
                className={`nav-item transition-colors ${
                  activeSection === item.sectionId ? 'text-foreground' : 'text-primary hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
  );
};

export default Navigation;