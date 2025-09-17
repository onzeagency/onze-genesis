import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

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
  gl_PointSize = max(1.0, (aSize * uSize) * (600.0 / max(1.0, -mvPosition.z)) * (1.0 + mouseInfluence * 2.0));
  
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
      positions[i3] = point.x + (Math.random() - 0.5) * 40;
      positions[i3 + 1] = point.y + (Math.random() - 0.5) * 40;
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
    console.log('Creating shader material with color:', color);
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2() },
        uColor: { value: color },
        uSize: { value: 4.0 }, // Increased particle size for better visibility
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
    
    // Create 3D logo geometry from SVG
    const create3DLogoGeometry = async () => {
      try {
        console.log('Creating stylized 3D XI logo...');
        
        const points: THREE.Vector3[] = [];
        
        // Create enhanced X shape with 3D depth and curves
        const xParticles = 1200;
        for (let i = 0; i < xParticles; i++) {
          const t = (i / xParticles - 0.5) * 2; // -1 to 1
          const depth = (Math.random() - 0.5) * 80;
          
          // Create curved X with varying thickness
          const curve = Math.sin(t * Math.PI) * 10;
          const thickness = (1 - Math.abs(t)) * 8 + 2;
          
          // Main diagonal lines
          const x1 = t * 160 - 120;
          const y1 = t * 160 + curve;
          const x2 = t * 160 - 120;
          const y2 = -t * 160 + curve;
          
          // Add thickness to lines
          for (let j = 0; j < 3; j++) {
            const offset = (j - 1) * thickness;
            points.push(new THREE.Vector3(x1 + offset, y1, depth));
            points.push(new THREE.Vector3(x2 + offset, y2, depth));
          }
        }
        
        // Create enhanced I shape with serifs and 3D depth
        const iParticles = 800;
        for (let i = 0; i < iParticles; i++) {
          const y = (i / iParticles - 0.5) * 320;
          const depth = (Math.random() - 0.5) * 80;
          
          // Main vertical line
          points.push(new THREE.Vector3(120, y, depth));
          
          // Add thickness to vertical line
          points.push(new THREE.Vector3(115, y, depth));
          points.push(new THREE.Vector3(125, y, depth));
          
          // Top and bottom serifs (horizontal lines)
          if (Math.abs(y) > 140) {
            const serifWidth = 25;
            for (let k = -serifWidth; k <= serifWidth; k += 3) {
              points.push(new THREE.Vector3(120 + k, y, depth));
              // Add serif thickness
              if (Math.abs(y) > 150) {
                points.push(new THREE.Vector3(120 + k, y + (y > 0 ? -8 : 8), depth));
              }
            }
          }
        }
        
        // Add some scattered particles for extra effect
        for (let i = 0; i < 200; i++) {
          const angle = Math.random() * Math.PI * 2;
          const radius = 80 + Math.random() * 100;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const z = (Math.random() - 0.5) * 100;
          
          // Only add particles near the logo area
          if ((Math.abs(x + 120) < 200 && Math.abs(y) < 180) || 
              (Math.abs(x - 120) < 30 && Math.abs(y) < 180)) {
            points.push(new THREE.Vector3(x, y, z));
          }
        }
        
        console.log(`Created enhanced 3D XI logo with ${points.length} particles`);
        setLogoShape(points);
        
      } catch (error) {
        console.error('Error creating 3D logo:', error);
        
        // Simple fallback
        const fallbackPoints: THREE.Vector3[] = [];
        
        // Simple X
        for (let i = 0; i < 400; i++) {
          const t = (i / 400 - 0.5) * 2;
          fallbackPoints.push(new THREE.Vector3(t * 150 - 100, t * 150, 0));
          fallbackPoints.push(new THREE.Vector3(t * 150 - 100, -t * 150, 0));
        }
        
        // Simple I
        for (let i = 0; i < 200; i++) {
          const y = (i / 200 - 0.5) * 300;
          fallbackPoints.push(new THREE.Vector3(100, y, 0));
        }
        
        setLogoShape(fallbackPoints);
      }
    };
    
    create3DLogoGeometry();
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
      style={{ 
        position: 'absolute', 
        top: '144px', // Start below navigation (about 9rem)
        left: 0, 
        width: '100%', 
        height: 'calc(100vh - 144px)', // Fill remaining height
        zIndex: 1,
        background: 'transparent' 
      }}
      camera={{ position: [0, 0, 500], fov: 75 }} // Adjusted for 3D depth
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