import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import xiLogo from '@/assets/xi-logo.svg';

// Shader code for dreamy particles
const vertexShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform float uSize;
uniform float uForce;

attribute vec3 aPositionTarget;
attribute float aAlpha;
attribute float aSize;

varying float vAlpha;

void main() {
  vec3 pos = position;
  
  // Mouse interaction
  vec2 mouseDistance = uMouse - pos.xy;
  float mouseLength = length(mouseDistance);
  float mouseInfluence = smoothstep(300.0, 0.0, mouseLength);
  
  // Repel particles from mouse
  pos.xy -= normalize(mouseDistance) * mouseInfluence * uForce * 100.0;
  
  // Return to original position
  pos += (aPositionTarget - pos) * 0.02;
  
  // Add some floating motion
  pos.x += sin(uTime * 0.001 + pos.y * 0.01) * 10.0;
  pos.y += cos(uTime * 0.001 + pos.x * 0.01) * 5.0;
  
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  
  // Size based on mouse distance and individual particle size
  gl_PointSize = (aSize * uSize) * (300.0 / -mvPosition.z) * (1.0 + mouseInfluence * 2.0);
  
  vAlpha = aAlpha * (1.0 - mouseInfluence * 0.5);
}
`;

const fragmentShader = `
uniform vec3 uColor;
uniform float uTime;

varying float vAlpha;

void main() {
  // Create circular particle
  vec2 center = gl_PointCoord - 0.5;
  float dist = length(center);
  
  if (dist > 0.5) discard;
  
  // Soft edges
  float alpha = 1.0 - smoothstep(0.1, 0.5, dist);
  alpha *= vAlpha;
  
  // Add some shimmer
  alpha *= 0.8 + 0.2 * sin(uTime * 0.01 + gl_FragCoord.x * 0.1);
  
  gl_FragColor = vec4(uColor, alpha);
}
`;

interface ParticleSystemProps {
  logoShape: THREE.Vector3[];
  color: THREE.Color;
  mouse: THREE.Vector2;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ logoShape, color, mouse }) => {
  const meshRef = useRef<THREE.Points>(null);
  
  const { size, camera } = useThree();
  
  console.log('ParticleSystem rendering with', logoShape.length, 'particles');
  
  // Create geometry with particles based on logo shape
  const { geometry, count } = useMemo(() => {
    console.log('Creating particle geometry...');
    const particleCount = logoShape.length;
    const geometry = new THREE.BufferGeometry();
    
    const positions = new Float32Array(particleCount * 3);
    const positionsTarget = new Float32Array(particleCount * 3);
    const alphas = new Float32Array(particleCount);
    const sizes = new Float32Array(particleCount);
    
    logoShape.forEach((point, i) => {
      const i3 = i * 3;
      
      // Current position (start with some randomness)
      positions[i3] = point.x + (Math.random() - 0.5) * 100;
      positions[i3 + 1] = point.y + (Math.random() - 0.5) * 100;
      positions[i3 + 2] = point.z;
      
      // Target position (logo shape)
      positionsTarget[i3] = point.x;
      positionsTarget[i3 + 1] = point.y;
      positionsTarget[i3 + 2] = point.z;
      
      // Random alpha and size
      alphas[i] = Math.random() * 0.8 + 0.2;
      sizes[i] = Math.random() * 2 + 0.5;
    });
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aPositionTarget', new THREE.BufferAttribute(positionsTarget, 3));
    geometry.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    
    console.log('Particle geometry created with', particleCount, 'particles');
    return { geometry, count: particleCount };
  }, [logoShape]);
  
  // Shader material
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2() },
        uColor: { value: color },
        uSize: { value: 1.5 },
        uForce: { value: 0.7 }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
  }, [color]);
  
  useFrame((state) => {
    if (meshRef.current && meshRef.current.material) {
      const mat = meshRef.current.material as THREE.ShaderMaterial;
      mat.uniforms.uTime.value = state.clock.elapsedTime * 1000;
      
      // Convert mouse to 3D space
      const mouseNDC = new THREE.Vector2(
        (mouse.x / size.width) * 2 - 1,
        -(mouse.y / size.height) * 2 + 1
      );
      
      // Unproject mouse position
      const mouseWorld = new THREE.Vector3(mouseNDC.x, mouseNDC.y, 0.5);
      mouseWorld.unproject(camera);
      
      mat.uniforms.uMouse.value.set(mouseWorld.x, mouseWorld.y);
    }
  });
  
  return (
    <points ref={meshRef} geometry={geometry} material={material} />
  );
};

interface DreamyParticlesProps {
  mouse: { x: number; y: number };
}

const DreamyParticles: React.FC<DreamyParticlesProps> = ({ mouse }) => {
  const [logoShape, setLogoShape] = useState<THREE.Vector3[]>([]);
  const [color, setColor] = useState(new THREE.Color('#F777A8'));
  const mouseVector = useRef(new THREE.Vector2());
  
  useEffect(() => {
    mouseVector.current.set(mouse.x, mouse.y);
  }, [mouse]);
  
  useEffect(() => {
    console.log('DreamyParticles component mounted');
    // Read primary color from CSS
    const primaryHsl = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    console.log('Primary HSL:', primaryHsl);
    if (primaryHsl) {
      const [h, s, l] = primaryHsl.split(' ');
      setColor(new THREE.Color(`hsl(${h}, ${s}, ${l})`));
    }
    
    // Extract logo shape points
    const extractLogoShape = () => {
      console.log('Starting logo shape extraction...');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('Could not get canvas context');
        return;
      }
      
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        console.log('XI Logo loaded successfully');
        const size = 400;
        canvas.width = size;
        canvas.height = size;
        
        ctx.drawImage(img, 0, 0, size, size);
        const imageData = ctx.getImageData(0, 0, size, size);
        
        const points: THREE.Vector3[] = [];
        const step = 4; // Sample every 4 pixels
        
        for (let y = 0; y < size; y += step) {
          for (let x = 0; x < size; x += step) {
            const i = (y * size + x) * 4;
            const alpha = imageData.data[i + 3];
            
            if (alpha > 50) {
              // Convert to centered coordinates
              points.push(new THREE.Vector3(
                (x - size / 2) * 2,
                -(y - size / 2) * 2,
                0
              ));
            }
          }
        }
        
        console.log(`Extracted ${points.length} points from logo`);
        setLogoShape(points);
      };
      
      img.onerror = (error) => {
        console.error('Failed to load XI logo:', error);
      };
      
      console.log('Loading XI logo from:', xiLogo);
      img.src = xiLogo;
    };
    
    extractLogoShape();
  }, []);
  
  if (logoShape.length === 0) {
    console.log('Logo shape not loaded yet, showing loading...');
    return (
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div>Loading particles...</div>
      </div>
    );
  }

  console.log('Rendering Canvas with', logoShape.length, 'particles');
  
  return (
    <Canvas
      className="absolute inset-0 w-full h-full cursor-none"
      camera={{ position: [0, 0, 1000], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      onCreated={({ gl, scene, camera }) => {
        console.log('Three.js Canvas created:', { gl, scene, camera });
      }}
    >
      <ParticleSystem 
        logoShape={logoShape} 
        color={color} 
        mouse={mouseVector.current}
      />
    </Canvas>
  );
};

export default DreamyParticles;