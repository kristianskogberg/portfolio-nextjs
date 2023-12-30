"use client";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/model/cyberkongz_vx.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y -= 0.002;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Model() {
  return (
    <Canvas className="cursor-grab" camera={{ fov: 16, position: [-6, 1, 7] }}>
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={1} />
      <pointLight position={[-1, 2, -1]} intensity={10} />
      <MeshComponent />
    </Canvas>
  );
}
