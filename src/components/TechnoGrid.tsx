import React from 'react';

interface TechnoGridProps {
  className?: string;
  title?: string;
}

const TechnoGrid: React.FC<TechnoGridProps> = ({ className = '', title }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Main grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Scan lines */}
      <div className="absolute inset-0 scan-lines opacity-20" />
      
      {/* Corner brackets with enhanced title visibility */}
      <div className="absolute top-6 left-6 flex items-start space-x-4 z-50">
        <div className="w-12 h-12 border-l-4 border-t-4 border-primary opacity-80 animate-pulse glow-border" />
        {title && (
          <div className="bg-background/90 backdrop-blur-md border border-primary/60 px-6 py-3 rounded-lg shadow-lg relative z-50">
            <div className="text-primary font-tech text-lg font-bold tracking-widest glow-text">
              {title}
            </div>
            {/* Additional glow effect */}
            <div className="absolute inset-0 rounded-lg bg-primary/10 blur-sm -z-10"></div>
          </div>
        )}
      </div>
      <div className="absolute top-6 right-6 w-12 h-12 border-r-4 border-t-4 border-primary opacity-80 animate-pulse glow-border z-40" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l-4 border-b-4 border-primary opacity-80 animate-pulse glow-border z-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r-4 border-b-4 border-primary opacity-80 animate-pulse glow-border z-40" style={{ animationDelay: '1.5s' }} />
      
      {/* Center crosshair */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-12 h-px bg-primary opacity-40" />
        <div className="w-px h-12 bg-primary opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary opacity-50 animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-primary opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default TechnoGrid;