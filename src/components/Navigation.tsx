import { useState } from 'react';
import onzeLogo from '@/assets/onze-logo.svg';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('');

  const navItems = [
    { label: 'Artists', href: '#artists' },
    { label: 'Label', href: '#label' },
    { label: 'Merch', href: '#merch' },
    { label: 'Events', href: '#events' },
    { label: 'About Us', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-8">
      <div className="flex justify-between items-center">
        {/* ONZE Logo */}
        <div>
          <img 
            src={onzeLogo} 
            alt="ONZE" 
            className="w-36 h-36 bg-transparent"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-item ${
                activeTab === item.label ? 'text-primary' : 'text-foreground'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.label);
                // Add smooth scroll or navigation logic here
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;