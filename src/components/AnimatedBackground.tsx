
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

// Random stars generation
function randomInSphere(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((2 * Math.random()) - 1);
    
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
}

interface AnimatedStarsProps {
  count?: number;
  radius?: number;
  speed?: number;
  gradient?: [string, string];
}

const AnimatedStars = ({ 
  count = 5000, 
  radius = 10, 
  speed = 0.1,
  gradient = ['#1a365d', '#0d9488']
}: AnimatedStarsProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Fixed: Generate positions array properly
  const positions = randomInSphere(count, radius);
  
  return (
    <Points 
      ref={pointsRef} 
      positions={positions}
      stride={3} 
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color={gradient[0]}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-b from-primary/10 to-secondary/10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <AnimatedStars />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
