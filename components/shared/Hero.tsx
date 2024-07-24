"use client";
import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Box = (props: any) => {
  return (
    <mesh scale={5}>
      <planeGeometry args={[2, 1, 32, 32]} />
      <meshStandardMaterial wireframe color={"hotpink"} />
    </mesh>
  );
};

const Hero = () => {
  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center">
      <div className="text-white font-bold text-8xl absolute z-10">KRAFTHY</div>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <OrbitControls />
        <Box />
      </Canvas>
    </div>
  );
};

export default Hero;
