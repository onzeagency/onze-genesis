import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <div 
      className={`glitch-text ${className}`}
      data-text={text}
    >
      <span className="relative z-10">{text}</span>
    </div>
  );
};

export default GlitchText;