"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Model } from "./cube/cube";

type Props = {};

const title = "<about>";

const parentVariant = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 1 },
  },
  hidden: { opacity: 0 },
};

const childVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
};
export default function About({}: Props) {
  return (
    <div className="max-w-7xl min-h-[67vh] h-full w-full mx-auto text-left justify-start items-start flex flex-col pt-[50px]">
      <h2 className="py-6">About</h2>
      <motion.div
        variants={parentVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col w-full items-start gap-6"
      >
        <motion.div
          variants={childVariant}
          className="max-w-[700px] h-full w-full"
        >
          <p>
            Hi, I'm <span className="text-accent">Krisu</span>. Nice to meet
            you!
          </p>
        </motion.div>
        <motion.div
          variants={childVariant}
          className="max-w-[700px] h-full w-full"
        >
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
        </motion.div>

        <motion.div
          variants={childVariant}
          className="max-w-[700px] h-full w-full"
        >
          <p>
            I like to spend my free time working on my personal projects, going
            to the gym, cycling and playing Pokémon GO. I also enjoy video
            editing and creating 3D renders and animations. I'm interested in
            blockchain, Web3 and NFTs.
          </p>
        </motion.div>

        <motion.div
          variants={childVariant}
          className="max-w-[700px] h-full w-full"
        >
          <p>
            I have a Bachelor's Degree in Information Technology. Currently, I'm
            studying for a <span className="text-accent">Master's Degree</span>{" "}
            specializing in{" "}
            <span className="text-accent">Software Engineering</span> and I'm
            writing my thesis on how LLMs can be used to generate UI code.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
