import { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small delay before hiding loader
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed here

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center">
      {/* ONZE Logo */}
      <div className="absolute top-8 left-8">
        <h1 className="font-hardrace text-4xl glow-text tracking-wider">
          ONZE
        </h1>
      </div>

      {/* Loading Progress */}
      <div className="w-64 space-y-4">
        <div className="loading-bar">
          <div 
            className="loading-progress transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center">
          <span className="font-tech text-xl glow-text">{progress}%</span>
        </div>
      </div>

      {/* Animated dots */}
      <div className="absolute bottom-12 flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"
            style={{
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;