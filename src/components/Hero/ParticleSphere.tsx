"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";
import styles from "../../styles/ParticleSphere.module.scss";

interface ParticleSphereProps {
  count?: number;
  isHovered?: boolean;
  mouse?: { x: number; y: number };
}

function Particles({ count = 1200, isHovered = false, mouse = { x: 0, y: 0 } }: ParticleSphereProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const targetRotationRef = useRef({ x: 0, y: 0 });

  // Generate positions on a sphere surface
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Uniformly sample points on a sphere
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 1.0 + (Math.random() - 0.5) * 0.02; // slight radius jitter
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, [count]);

  // Create a buffer geometry only once
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  useFrame((state, delta) => {
    if (!pointsRef.current || !groupRef.current) return;

    // Smooth rotation with mouse parallax
    const maxRotation = 0.25;
    targetRotationRef.current.x = mouse.y * maxRotation;
    targetRotationRef.current.y = mouse.x * maxRotation;

    // Lerp current rotation to target (smooth damping)
    groupRef.current.rotation.x += (targetRotationRef.current.x - groupRef.current.rotation.x) * 0.08;
    groupRef.current.rotation.y += (targetRotationRef.current.y - groupRef.current.rotation.y) * 0.08;

    // Auto-rotate when not hovered
    if (!isHovered) {
      groupRef.current.rotation.y += delta * 0.08;
    }

    // Subtle floating
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.03;

    // Shimmer effect by slightly toggling size via scale
    const shimmer = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.002;
    groupRef.current.scale.set(shimmer, shimmer, shimmer);

    // Hover glow boost - update material opacity
    if (pointsRef.current && Array.isArray(pointsRef.current.material) === false) {
      const material = pointsRef.current.material as THREE.PointsMaterial;
      const targetOpacity = isHovered ? 0.95 : 0.9;
      material.opacity += (targetOpacity - material.opacity) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={geom}>
        <pointsMaterial
          size={0.018}
          sizeAttenuation={true}
          color={new THREE.Color(0xffffff)}
          opacity={0.9}
          transparent={true}
        />
      </points>
    </group>
  );
}

export default function ParticleSphere({ isHovered = false, mouse = { x: 0, y: 0 } }: ParticleSphereProps) {
  return (
    <div className={styles.canvasWrap}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1} color={0x70a9ff} />
        <directionalLight intensity={0.2} />

        <React.Suspense fallback={null}>
          <group>
            {/* Soft bluish glow using a scaled Points with larger size and blue tint */}
            <Points>
              <PointMaterial
                transparent
                color="#7fd3ff"
                size={0.06}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.08}
              />
            </Points>

            <Particles count={1300} isHovered={isHovered} mouse={mouse} />
          </group>
        </React.Suspense>

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <Preload all />
      </Canvas>

      {/* Subtle glow overlay behind canvas for vignette */}
      <div className={styles.glow} />

      {/* Spotlight overlay for premium cursor tracking effect */}
      <div className={styles.spotlight} />
    </div>
  );
}
