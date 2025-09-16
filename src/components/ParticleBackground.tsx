import { useEffect, useRef } from 'react';
import xiLogo from '@/assets/xi-logo.svg';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to a fixed size for the XI logo
    const resizeCanvas = () => {
      canvas.width = 384; // 96 * 4 (w-96 = 384px)
      canvas.height = 384;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Read brand color from CSS variables (H and S), vary only lightness
    const primaryHsl = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    const [h, s] = primaryHsl.split(' ').slice(0, 2);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: `hsl(${h} ${s} ${Math.random() * 40 + 30}%)`,
        });
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="particle-container absolute inset-0 flex items-center justify-center">
      <div className="relative w-96 h-96">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ 
            background: 'transparent',
            maskImage: `url(${xiLogo})`,
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            maskSize: 'contain',
            WebkitMaskImage: `url(${xiLogo})`,
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            WebkitMaskSize: 'contain'
          }}
        />
        {/* XI Logo overlay for visual reference */}
        <img 
          src={xiLogo} 
          alt="XI" 
          className="absolute inset-0 w-full h-full opacity-20"
        />
      </div>
    </div>
  );
};

export default ParticleBackground;