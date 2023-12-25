"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useMotionValue, useSpring, useScroll } from "framer-motion";
import { motion } from "framer-motion-3d";

type Props = {};

export default function index({}: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="h-[500px] w-[500px]">
      <div className="sticky top-0"></div>
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 2]} />
        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {
  const mesh = useRef(null);

  const options = {
    damping: 20,
  };
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };
  const handleMouseMove = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;

    mouse.x.set(x);
    mouse.y.set(y);
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.mesh ref={mesh} rotation-x={mouse.y} rotation-y={mouse.x}>
      <boxGeometry args={[3, 3, 3]} />
    </motion.mesh>
  );
}
