import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface LogoModelProps {
  mouse: THREE.Vector2;
}

const LogoModel: React.FC<LogoModelProps> = ({ mouse }) => {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/xi-logo.glb');
  const { size, camera } = useThree();
  
  const [originalPosition] = useState(new THREE.Vector3(0, 0, 0));
  const [targetPosition] = useState(new THREE.Vector3(0, 0, 0));
  
  // Get brand color from CSS variables
  const [color, setColor] = useState('#F777A8');
  
  useEffect(() => {
    const primaryHsl = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    if (primaryHsl) {
      const [h, s, l] = primaryHsl.split(' ');
      setColor(`hsl(${h}, ${s}, ${l})`);
    }
  }, []);
  
  useEffect(() => {
    if (scene && meshRef.current) {
      // Clear previous children and add the loaded model
      meshRef.current.clear();
      const clonedScene = scene.clone();
      
      // Scale and position the model
      clonedScene.scale.set(0.3, 0.3, 0.3);
      clonedScene.position.set(0, 0, 0);
      
      // Apply material to all meshes in the model
      clonedScene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshPhongMaterial({
            color: new THREE.Color(color),
            transparent: true,
            opacity: 0.9,
          });
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      meshRef.current.add(clonedScene);
    }
  }, [scene, color]);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Convert mouse to 3D world space
    const mouseNDC = new THREE.Vector2(
      (mouse.x / size.width) * 2 - 1,
      -(mouse.y / size.height) * 2 + 1
    );
    
    const mouseWorld = new THREE.Vector3(mouseNDC.x, mouseNDC.y, 0);
    mouseWorld.unproject(camera);
    
    // Calculate distance from mouse
    const distance = mouseWorld.distanceTo(originalPosition);
    const maxDistance = 200;
    
    if (distance < maxDistance) {
      // Repel from mouse
      const repelForce = (maxDistance - distance) / maxDistance;
      const direction = new THREE.Vector3()
        .subVectors(originalPosition, mouseWorld)
        .normalize()
        .multiplyScalar(repelForce * 50);
      
      targetPosition.copy(originalPosition).add(direction);
      
      // Scale effect based on mouse proximity
      const scale = 0.3 + repelForce * 0.1;
      meshRef.current.scale.setScalar(scale);
    } else {
      // Return to original position
      targetPosition.copy(originalPosition);
      meshRef.current.scale.setScalar(0.3);
    }
    
    // Smooth movement
    meshRef.current.position.lerp(targetPosition, 0.05);
    
    // Gentle floating animation
    meshRef.current.position.y = originalPosition.y + Math.sin(state.clock.elapsedTime * 0.5) * 5;
    
    // Subtle rotation
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
  });
  
  return (
    <group ref={meshRef}>
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      {/* Point light that follows the mouse */}
      <pointLight 
        position={[mouse.x * 0.01, mouse.y * 0.01, 50]} 
        intensity={1} 
        color={color}
        distance={300}
      />
      {/* Directional light for depth */}
      <directionalLight position={[10, 10, 5]} intensity={0.6} />
    </group>
  );
};

interface DreamyParticlesProps {
  mouse: { x: number; y: number };
}

const DreamyParticles: React.FC<DreamyParticlesProps> = ({ mouse }) => {
  const mouseVector = useRef(new THREE.Vector2());
  
  useEffect(() => {
    mouseVector.current.set(mouse.x, mouse.y);
  }, [mouse]);
  
  return (
    <Canvas
      style={{ 
        position: 'absolute', 
        top: 0,
        left: 0, 
        width: '100%', 
        height: '100vh',
        zIndex: 1,
        background: 'transparent' 
      }}
      camera={{ position: [0, 0, 300], fov: 75 }}
      gl={{ alpha: true, antialias: true }}
    >
      <LogoModel mouse={mouseVector.current} />
    </Canvas>
  );
};

export default DreamyParticles;