'use client'

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedCube = ({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshDistortMaterial
          color="#22c55e"
          attach="material"
          distort={0.2}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const PrintingLayer = ({ y, delay }: { y: number; delay: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  
  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      const time = state.clock.elapsedTime + delay;
      meshRef.current.scale.x = 0.8 + Math.sin(time * 2) * 0.1;
      meshRef.current.scale.z = 0.8 + Math.cos(time * 2) * 0.1;
      materialRef.current.opacity = 0.3 + Math.sin(time * 3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, y, 0]}>
      <boxGeometry args={[1.5, 0.05, 1.5]} />
      <meshStandardMaterial 
        ref={materialRef}
        color="#22c55e" 
        transparent 
        opacity={0.5}
        emissive="#22c55e"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

const PrintingAnimation = () => {
  const layers = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      y: -0.8 + i * 0.2,
      delay: i * 0.3,
    }));
  }, []);

  return (
    <group>
      {layers.map((layer, i) => (
        <PrintingLayer key={i} y={layer.y} delay={layer.delay} />
      ))}
    </group>
  );
};

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const count = 50;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#22c55e"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#22c55e" />
      
      <PrintingAnimation />
      <AnimatedCube position={[-2.5, 1.5, -1]} scale={0.4} speed={0.8} />
      <AnimatedCube position={[2.5, -1, -2]} scale={0.3} speed={1.2} />
      <AnimatedCube position={[1.5, 2, -1.5]} scale={0.25} speed={1} />
      <FloatingParticles />
    </>
  );
};

const Hero3DAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-40">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3DAnimation;
