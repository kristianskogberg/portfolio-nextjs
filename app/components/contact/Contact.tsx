"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoPersonOutline } from "react-icons/io5";
import { BiMessageDots } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";

type Props = {};

const parentVariant = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 1 },
  },
  hidden: { opacity: 0 },
};

const title = "<contact>";

export default function Contact({}: Props) {
  return (
    <div className=" max-w-7xl min-h-screen mx-auto text-left justify-between items-start flex flex-col pt-[50px]">
      <div className="flex flex-col w-full h-full">
        <h2 className="text-m text-gray-500 tracking-wide py-6">{title}</h2>
        <motion.p
          className="text-gray-300 py-4"
          variants={parentVariant}
          initial="hidden"
          //animate={control}
          //ref={ref}
          whileInView={"visible"}
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          To contact me, simply submit the form below or send me an email at{" "}
          <span className="text-accent">k.skogberg98@gmail.com</span>
        </motion.p>
        <div className="flex justify-center w-full flex-col items-center">
          <form
            method="POST"
            action="https://getform.io/f/2015e10b-7fc6-4fc3-8571-5b846f4ff0e1"
            className="flex flex-col max-w-[800px] w-full py-4 gap-4"
          >
            <span className="flex flex-row  items-start">
              <label
                htmlFor="name"
                className="w-[50px] h-[50px] justify-center items-center hidden sm:flex"
              >
                <IoPersonOutline size={25} />
              </label>
              <input
                type="text"
                placeholder="Your name..."
                name="name"
                id="name"
                required={true}
              />
            </span>

            <span className="flex flex-row  items-start">
              <label
                htmlFor="email"
                className="w-[50px] h-[50px] justify-center items-center hidden sm:flex"
              >
                <MdAlternateEmail size={25} />
              </label>
              <input
                type="email"
                placeholder="Your email..."
                name="email"
                id="email"
                required={true}
              />
            </span>
            <span className="flex flex-row  items-start">
              <label
                htmlFor="message"
                className="w-[50px] h-[50px]  justify-center items-center hidden sm:flex"
              >
                <BiMessageDots size={25} />
              </label>
              <textarea
                required={true}
                typeof="text"
                name="message"
                id="message"
                rows={10}
                maxLength={500}
                placeholder="Your message..."
                className="min-h-[200px] max-h-[500px]"
              />
            </span>
            <motion.button
              className="text-white border-2 hover:bg-dark hover:border-dark px-4 py-3 my-8 mx-auto flex items-center duration-[200ms]"
              variants={parentVariant}
              initial="hidden"
              //animate={control}
              //ref={ref}
              whileInView={"visible"}
              viewport={{
                once: true,
                amount: 0.1,
              }}
            >
              Send
            </motion.button>
          </form>
        </div>
      </div>
      <p className="text-gray-400 py-8 flex w-full items-center justify-center">
        Copyright {"\u00A9"} Kristian Skogberg
      </p>
    </div>
  );
}
