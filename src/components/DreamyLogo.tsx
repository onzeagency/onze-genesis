import React, { useEffect, useRef, useState } from 'react';
import xiLogo from '@/assets/xi-logo-new.png';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  opacity: number;
  speed: number;
  angle: number;
  originX: number;
  originY: number;
  color: string;
}

const DreamyLogo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const colors = [
    'rgba(312, 100%, 50%, 0.8)', // Primary pink
    'rgba(312, 100%, 60%, 0.6)', // Lighter pink
    'rgba(312, 100%, 40%, 0.9)', // Darker pink
    'rgba(312, 100%, 55%, 0.7)', // Medium pink
    'rgba(320, 100%, 50%, 0.5)', // Slightly purple pink
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const container = containerRef.current;
      if (!container) return;
      
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Create particles
    const particleCount = 60;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 150 + Math.random() * 100;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      newParticles.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        targetX: centerX + Math.cos(angle) * radius,
        targetY: centerY + Math.sin(angle) * radius,
        originX: centerX + Math.cos(angle) * radius,
        originY: centerY + Math.sin(angle) * radius,
        size: 2 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.7,
        speed: 0.02 + Math.random() * 0.03,
        angle: angle,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    setParticles(newParticles);

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || particles.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Calculate distance from mouse
        const dx = mousePos.x - particle.x;
        const dy = mousePos.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;

        // Mouse influence
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          particle.targetX = particle.originX - Math.cos(angle) * force * 50;
          particle.targetY = particle.originY - Math.sin(angle) * force * 50;
        } else {
          // Return to origin with floating motion
          const time = Date.now() * 0.001;
          particle.targetX = particle.originX + Math.sin(time + particle.angle) * 20;
          particle.targetY = particle.originY + Math.cos(time + particle.angle) * 15;
        }

        // Smooth movement
        particle.x += (particle.targetX - particle.x) * particle.speed;
        particle.y += (particle.targetY - particle.y) * particle.speed;

        // Draw particle with glow effect
        ctx.save();
        
        // Outer glow
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Inner particle
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Connect nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 80) {
              ctx.save();
              ctx.globalAlpha = (80 - distance) / 80 * 0.2;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles, mousePos]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ minHeight: '400px' }}
    >
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Logo */}
      <div 
        className="relative z-10 transition-transform duration-300 hover:scale-110"
        style={{
          filter: 'drop-shadow(0 0 30px hsl(312 100% 50% / 0.8))',
        }}
      >
        <img
          src={xiLogo}
          alt="XI Logo"
          className="w-48 h-48 md:w-64 md:h-64 object-contain"
          style={{
            filter: 'brightness(1.1) contrast(1.1)',
          }}
        />
      </div>
    </div>
  );
};

export default DreamyLogo;