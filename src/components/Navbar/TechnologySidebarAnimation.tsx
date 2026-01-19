"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";
import styles from "./TechnologySidebarAnimation.module.css";

// Animation constants
const NODE_COUNT = 7;
const ORBIT_RADIUS = 0.7;
const NODE_SIZE = 0.06;
const CENTER_GLOW_SIZE = 0.12;

// Central glowing node component
function CenterNode({ isHovered }: { isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 1.5) * 0.08 + 1;
      meshRef.current.scale.setScalar(pulse);
    }
    if (glowRef.current) {
      const intensity = isHovered ? 1.4 : 1;
      const pulse = Math.sin(state.clock.elapsedTime * 1.2) * 0.15 + intensity;
      glowRef.current.scale.setScalar(pulse * CENTER_GLOW_SIZE);
    }
  });

  return (
    <group>
      {/* Radial glow */}
      <mesh ref={glowRef}>
        <circleGeometry args={[1, 24]} />
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={isHovered ? 0.12 : 0.08}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Center node */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[NODE_SIZE, 12, 12]} />
        <meshBasicMaterial
          color="#60a5fa"
          emissive="#3b82f6"
          emissiveIntensity={isHovered ? 0.7 : 0.4}
        />
      </mesh>
    </group>
  );
}

// Orbiting node component
function OrbitingNode({
  angle,
  isHovered,
  rotationSpeed,
}: {
  angle: number;
  isHovered: boolean;
  rotationSpeed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * rotationSpeed;
      const x = Math.cos(angle + time) * ORBIT_RADIUS;
      const y = Math.sin(angle + time) * ORBIT_RADIUS;
      meshRef.current.position.set(x, y, 0);

      const pulse = Math.sin(state.clock.elapsedTime * 2.5 + angle * 2) * 0.12 + 1;
      meshRef.current.scale.setScalar(pulse);
    }
  });

  const initialPosition = useMemo(() => {
    const x = Math.cos(angle) * ORBIT_RADIUS;
    const y = Math.sin(angle) * ORBIT_RADIUS;
    return [x, y, 0] as [number, number, number];
  }, [angle]);

  return (
    <mesh ref={meshRef} position={initialPosition}>
      <sphereGeometry args={[NODE_SIZE * 0.6, 10, 10]} />
      <meshBasicMaterial
        color="#93c5fd"
        emissive="#60a5fa"
        emissiveIntensity={isHovered ? 0.5 : 0.25}
      />
    </mesh>
  );
}

// Connection line component - using safer approach
function ConnectionLine({
  startAngle,
  isHovered,
  rotationSpeed,
}: {
  startAngle: number;
  isHovered: boolean;
  rotationSpeed: number;
}) {
  const lineRef = useRef<THREE.Line>(null);
  const materialRef = useRef<THREE.LineBasicMaterial>(null);
  
  // Create geometry using useMemo to ensure it's ready
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    // Create initial points
    const points = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, 0),
    ];
    geom.setFromPoints(points);
    return geom;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (geometry) {
        geometry.dispose();
      }
    };
  }, [geometry]);

  useFrame((state) => {
    if (!lineRef.current || !materialRef.current || !geometry) return;
    
    try {
      const time = state.clock.elapsedTime * rotationSpeed;
      const startX = Math.cos(startAngle + time) * ORBIT_RADIUS;
      const startY = Math.sin(startAngle + time) * ORBIT_RADIUS;
      
      // Update geometry using setFromPoints (safer than direct array manipulation)
      if (geometry && typeof geometry.setFromPoints === 'function') {
        const points = [
          new THREE.Vector3(startX, startY, 0),
          new THREE.Vector3(0, 0, 0),
        ];
        geometry.setFromPoints(points);
      }

      // Pulse opacity - safely access material property
      if (materialRef.current && typeof materialRef.current.opacity !== 'undefined') {
        const pulse = Math.sin(state.clock.elapsedTime * 4 + startAngle) * 0.3 + 0.7;
        materialRef.current.opacity = isHovered ? pulse * 0.4 : pulse * 0.25;
      }
    } catch (e) {
      // Handle errors silently
    }
  });

  return (
    <line ref={lineRef} geometry={geometry}>
      <lineBasicMaterial
        ref={materialRef}
        color="#60a5fa"
        transparent
        opacity={0.25}
      />
    </line>
  );
}

// Main scene component
function Scene({ isHovered }: { isHovered: boolean }) {
  const rotationSpeed = isHovered ? 0.4 : 0.25;

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 1]} intensity={0.25} />
      
      <CenterNode isHovered={isHovered} />

      {Array.from({ length: NODE_COUNT }).map((_, i) => {
        const angle = (i / NODE_COUNT) * Math.PI * 2;
        return (
          <group key={i}>
            <ConnectionLine
              startAngle={angle}
              isHovered={isHovered}
              rotationSpeed={rotationSpeed}
            />
            <OrbitingNode
              angle={angle}
              isHovered={isHovered}
              rotationSpeed={rotationSpeed}
            />
          </group>
        );
      })}
    </>
  );
}

export function TechnologySidebarAnimation() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className={styles.canvasWrapper}>
        <Canvas
          camera={{ position: [0, 0, 2], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          onCreated={(state) => {
            try {
              if (state?.gl && typeof state.gl.setPixelRatio === 'function') {
                const dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1;
                state.gl.setPixelRatio(Math.min(dpr, 2));
              }
            } catch (e) {
              // Silently handle errors
            }
          }}
        >
          <Scene isHovered={isHovered} />
        </Canvas>
      </div>
    </motion.div>
  );
}
