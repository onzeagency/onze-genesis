import { useEffect, useRef, useState } from 'react';
import xiLogo from '@/assets/xi-logo.svg';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  homeX: number;
  homeY: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const logoDataRef = useRef<ImageData | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Load and process XI logo to get particle positions
    const loadLogoShape = async () => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      return new Promise<void>((resolve) => {
        img.onload = () => {
          // Create temporary canvas to extract logo shape
          const tempCanvas = document.createElement('canvas');
          const tempCtx = tempCanvas.getContext('2d');
          if (!tempCtx) return;

          const logoSize = 400;
          tempCanvas.width = logoSize;
          tempCanvas.height = logoSize;
          
          // Draw logo
          tempCtx.drawImage(img, 0, 0, logoSize, logoSize);
          logoDataRef.current = tempCtx.getImageData(0, 0, logoSize, logoSize);
          
          initializeParticles();
          resolve();
        };
        
        img.src = xiLogo;
      });
    };

    // Read brand color from CSS variables
    const primaryHsl = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    const [h, s] = primaryHsl.split(' ').slice(0, 2);

    const initializeParticles = () => {
      const particles: Particle[] = [];
      const logoData = logoDataRef.current;
      if (!logoData) return;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const logoSize = 400;
      const step = 8; // Sample every 8 pixels

      // Extract visible pixels from logo
      for (let y = 0; y < logoSize; y += step) {
        for (let x = 0; x < logoSize; x += step) {
          const i = (y * logoSize + x) * 4;
          const alpha = logoData.data[i + 3];
          
          if (alpha > 50) { // If pixel has some opacity
            const particleX = centerX + (x - logoSize / 2);
            const particleY = centerY + (y - logoSize / 2);
            
            particles.push({
              x: particleX + (Math.random() - 0.5) * 200,
              y: particleY + (Math.random() - 0.5) * 200,
              targetX: particleX,
              targetY: particleY,
              homeX: particleX,
              homeY: particleY,
              vx: 0,
              vy: 0,
              size: Math.random() * 3 + 1,
              opacity: Math.random() * 0.8 + 0.2,
              color: `hsl(${h} ${s} ${Math.random() * 40 + 30}%)`,
            });
          }
        }
      }

      particlesRef.current = particles;
    };

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Calculate mouse influence
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const repelX = (particle.x - mouse.x) / distance * force * 2;
          const repelY = (particle.y - mouse.y) / distance * force * 2;
          
          particle.targetX = particle.homeX + repelX * 50;
          particle.targetY = particle.homeY + repelY * 50;
        } else {
          particle.targetX = particle.homeX;
          particle.targetY = particle.homeY;
        }

        // Smooth movement towards target
        const spring = 0.02;
        const friction = 0.9;
        
        particle.vx += (particle.targetX - particle.x) * spring;
        particle.vy += (particle.targetY - particle.y) * spring;
        
        particle.vx *= friction;
        particle.vy *= friction;
        
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    // Initialize
    loadLogoShape().then(() => {
      animate();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouse.x, mouse.y]);

  return (
    <div className="particle-container absolute inset-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-none"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

export default ParticleBackground;