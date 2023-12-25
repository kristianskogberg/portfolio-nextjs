"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import GridBackground from "./GridBackground";
import TextTypingAnimation from "./TextTypingAnimation";

type Props = {};

export default function Hero({}: Props) {
  const [name, count] = useTypewriter({
    words: ["Kristian Skogberg"],
    delaySpeed: 2000,
  });

  return (
    <div className="relative h-screen flex justify-center items-center flex-col text-center">
      <div>
        {/*  <GridBackground /> */}

        <h2 className="text-m text-gray-500 tracking-wide">
          <TextTypingAnimation text="Hi, my name is" delay={0} ease="easeIn" />
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold py-4 text-white">
          <span>
            {" "}
            <TextTypingAnimation
              text="Kristian Skogberg"
              delay={0.8}
              duration={2}
              ease="easeOut"
            />
          </span>

          <Cursor cursorColor="#02F8AE" />
        </h1>
        <h2 className="text-m text-gray-500 tracking-wide">
          <TextTypingAnimation
            text="I'm a Software Engineer"
            delay={2.4}
            duration={2}
          />
        </h2>
      </div>
    </div>
  );
}
