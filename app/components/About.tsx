"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

import Cube from "@/app/components/cube";
import Image from "next/image";

type Props = {};

const title = "<about>";

export default function About({}: Props) {
  return (
    <div className="min-h-screen max-w-7xl mx-auto text-left justify-start items-center flex flex-col pt-[30px]">
      <h2 className="text-m text-gray-500 tracking-wide pt-6">{title}</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="max-w-[750px] col-span-2">
          <motion.h1 className="text-4xl sm:text-4xl font-bold text-primary py-10">
            Hi, I'm Krisu. Nice to meet you!
          </motion.h1>

          <p>
            I like <span className="text-accent">building</span> software and{" "}
            <span className="text-accent">applications</span> and that both{" "}
            <span className="text-accent ">look good</span> and{" "}
            <span className="text-accent ">function efficiently</span>. I
            consider creativity and problem-solving as some of my strengths and
            they been very useful traits to combine with programming to develop{" "}
            <span className="text-accent ">user-friendly</span> interfaces and
            experiences.
          </p>
          <br />
          <p className="">
            I like to spend my free time working on my personal projects, going
            to the gym, cycling and playing Pokémon GO. I also enjoy video
            editing and creating 3D renders and animations. I'm interested in
            blockchain, Web3 and NFTs.
          </p>
          <br />
          <p>
            I have a Bachelor's Degree in Information Technology. Currently I'm
            studying for a <span className="text-accent">Master's Degree</span>{" "}
            specializing in{" "}
            <span className="text-accent">Software Development</span>.
          </p>
        </div>
        <div className="w-[500px]  flex items-center justify-center">
          <Cube />
        </div>
      </div>
    </div>
  );
}
