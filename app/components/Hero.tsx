"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { HiArrowNarrowDown } from "react-icons/hi";
import { motion } from "framer-motion";
import TextTypingAnimation from "./TextTypingAnimation";
import Link from "next/link";
import LinkButton from "./LinkButton";

type Props = {};

const fadeVariant = {
  visible: {
    opacity: 1,
    transition: { delay: 4, duration: 1 },
  },
  hidden: { opacity: 0 },
};

const parentVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 3, duration: 1 },
  },
  hidden: { opacity: 0, y: 10 },
};

export default function Hero({}: Props) {
  const [name, count] = useTypewriter({
    words: ["Kristian Skogberg"],
    delaySpeed: 2000,
  });

  return (
    <div className=" max-w-7xl mx-auto h-screen flex justify-center items-start flex-col text-left">
      <div>
        {/*  <GridBackground /> */}

        <h2 className="text-m text-gray-500 tracking-wide">
          <TextTypingAnimation text="Hi, my name is" delay={0} ease="easeIn" />
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold py-4 text-white">
          <span>
            <TextTypingAnimation
              text="Kristian Skogberg"
              delay={0.8}
              duration={2}
              ease="easeOut"
            />
          </span>

          {/*  <Cursor cursorColor="#02F8AE" /> */}
        </h1>
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-400">
          <TextTypingAnimation
            text="I'm a Software Engineer"
            delay={2.4}
            duration={2}
          />
        </h2>
        <motion.p
          variants={parentVariant}
          initial="hidden"
          animate="visible"
          className="py-8 max-w-[700px]"
        >
          I'm studying for a Master's Degree specializing in Software
          Development at Tampere University. I'm currently building a recipe
          book web application with React in my free time.
        </motion.p>

        <motion.div
          variants={fadeVariant}
          initial="hidden"
          animate="visible"
          className="flex"
        >
          <LinkButton
            openInNewTab={false}
            text="My Projects"
            url="#projects"
            icon={<HiArrowNarrowDown />}
          />
        </motion.div>
      </div>
    </div>
  );
}
