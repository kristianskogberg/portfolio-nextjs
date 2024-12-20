"use client";

import { motion } from "framer-motion";
import React from "react";

import { Model } from "./cube/cube";

type Props = {};

const title = "<about>";

export default function About({}: Props) {
  return (
    <div className="max-w-7xl min-h-[67vh] h-full w-full mx-auto text-left justify-start items-start flex flex-col pt-[50px]">
      <h2 className="py-6">About</h2>
      <div className="flex flex-col lg:flex-row w-full items-start lg:items-center gap-6">
        <div className="max-w-[700px] h-full w-full">
          <motion.p className="">
            Hi, I'm <span className="text-accent">Krisu</span>. Nice to meet
            you!
          </motion.p>
          <br />
          <p>
            I like <span className="text-accent">building</span> software and{" "}
            <span className="text-accent">applications</span> and that both{" "}
            <span className="text-accent ">look good</span> and{" "}
            <span className="text-accent ">function efficiently</span>.
            <br />I consider creativity and problem-solving as some of my
            strengths and they been very useful traits to combine with
            programming to develop{" "}
            <span className="text-accent ">user-friendly</span> interfaces and
            experiences.
          </p>
          <br />
          <p>
            I like to spend my free time working on my personal projects, going
            to the gym, cycling and playing Pokémon GO. I also enjoy video
            editing and creating 3D renders and animations. I'm interested in
            blockchain, Web3 and NFTs.
          </p>
          <br />
          <p>
            I have a Bachelor's Degree in Information Technology. Currently, I'm
            studying for a <span className="text-accent">Master's Degree</span>{" "}
            specializing in{" "}
            <span className="text-accent">Software Engineering</span> and I'm
            writing my thesis on how LLMs can be used to generate UI code.
          </p>
        </div>

        {/*  <div className="flex  w-full h-full items-center justify-center">
          <div className="h-[250px] w-[250px]  sm:h-[380px] sm:w-[380px]">
            <Model />
          </div>
  </div> */}
      </div>
    </div>
  );
}
