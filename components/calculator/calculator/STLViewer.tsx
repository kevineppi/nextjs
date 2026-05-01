'use client'

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Center, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

interface STLModelProps {
  buffer: ArrayBuffer;
}

const STLModel = ({ buffer }: STLModelProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const loader = new STLLoader();
    const geo = loader.parse(buffer.slice(0));
    geo.computeVertexNormals();
    geo.center();
    return geo;
  }, [buffer]);

  // Gentle rotation
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  // Calculate scale to fit nicely
  const scale = useMemo(() => {
    geometry.computeBoundingBox();
    const box = geometry.boundingBox!;
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    return maxDim > 0 ? 3 / maxDim : 1;
  }, [geometry]);

  return (
    <Center>
      <mesh ref={meshRef} geometry={geometry} scale={scale} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="hsl(107, 7%, 45%)"
          metalness={0.1}
          roughness={0.35}
          clearcoat={0.4}
          clearcoatRoughness={0.2}
          envMapIntensity={1.2}
        />
      </mesh>
    </Center>
  );
};

interface STLViewerProps {
  buffer: ArrayBuffer;
  className?: string;
}

const STLViewer = ({ buffer, className = "" }: STLViewerProps) => {
  return (
    <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br from-muted/80 to-muted/40 border border-border/60 ${className}`}>
      <Canvas shadows dpr={[1, 2]} style={{ height: "100%" }}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-3, -3, 2]} intensity={0.3} />
        <pointLight position={[0, 5, 0]} intensity={0.4} color="hsl(107, 15%, 70%)" />
        <Suspense fallback={null}>
          <STLModel buffer={buffer} />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={12}
          autoRotate={false}
        />
      </Canvas>
      <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1 text-[10px] text-muted-foreground">
        Mausrad = Zoom · Ziehen = Drehen
      </div>
    </div>
  );
};

export default STLViewer;
