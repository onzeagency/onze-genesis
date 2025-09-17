import { Link, useLocation } from 'react-router-dom';
import onzeLogo from '@/assets/onze-logo.svg';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Artists', href: '/artists' },
    { label: 'Label', href: '/label' },
    { label: 'Merch', href: '/merch' },
    { label: 'Events', href: '/events' },
    { label: 'About Us', href: '/about-us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-8">
      <div className="flex justify-between items-center">
        {/* ONZE Logo */}
        <Link to="/">
          <img 
            src={onzeLogo} 
            alt="ONZE" 
            className="w-36 h-36 bg-transparent hover:scale-105 transition-transform"
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`nav-item ${
                location.pathname === item.href ? 'text-primary' : 'text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;