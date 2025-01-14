"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import SkillItem from "./SkillItem";

import TypeScriptIcon from "@/public/icons/typescript.png";
import ReactIcon from "@/public/icons/react.png";
import CPlusPlusIcon from "@/public/icons/cplusplus.png";
import PythonIcon from "@/public/icons/python.png";
import NodejsIcon from "@/public/icons/nodejsicon.png";
import TailwindIcon from "@/public/icons/tailwind.png";
import FigmaIcon from "@/public/icons/figma.png";
import FlutterIcon from "@/public/icons/flutter.png";

type Props = {};

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

export default function Skills({}: Props) {
  return (
    <div className=" max-w-7xl min-h-[50vh] mx-auto text-left justify-start items-start flex flex-col pt-[50px]">
      <h2 className="py-6">Skills</h2>
      <p className="pb-4">
        I'm most experienced with the following technologies:
      </p>

      <motion.div
        variants={parentVariant}
        initial="hidden"
        //animate={control}
        //ref={ref}
        whileInView={"visible"}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-16 text-center py-2"
      >
        <motion.div variants={childVariant}>
          <SkillItem image={ReactIcon} name={"React"} />
        </motion.div>

        <motion.div variants={childVariant}>
          <SkillItem image={TypeScriptIcon} name={"TypeScript"} />
        </motion.div>

        <motion.div variants={childVariant}>
          <SkillItem image={NodejsIcon} name={"Node.js"} />
        </motion.div>

        <motion.div variants={childVariant}>
          <SkillItem image={PythonIcon} name={"Python"} />
        </motion.div>

        <motion.div variants={childVariant}>
          <SkillItem image={CPlusPlusIcon} name={"C++"} />
        </motion.div>

        <motion.div variants={childVariant}>
          <SkillItem image={FigmaIcon} name={"Figma"} />
        </motion.div>

        <motion.div variants={childVariant}>
          <SkillItem image={TailwindIcon} name={"Tailwind CSS"} />
        </motion.div>

        <motion.div variants={childVariant}>
          <SkillItem image={FlutterIcon} name={"Flutter"} />
        </motion.div>
      </motion.div>
    </div>
  );
}
