"use client";

import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const navLinks = [
  { to: "about", text: "About" },
  { to: "skills", text: "Skills" },
  { to: "projects", text: "Projects" },
  { to: "contact", text: "Contact" },
];

type Props = {};

export default function Header({}: Props) {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleClick() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <header className="sticky top-0 flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://github.com/kristianskogberg"
          bgColor="transparent"
          fgColor="white"
          target="_blank"
        />
        <SocialIcon
          url="https://fi.linkedin.com/in/kristian-skogberg-220697165"
          bgColor="transparent"
          fgColor="white"
        />
      </div>
      <div>
        {/* desktop links */}

        <ul className="hidden md:flex">
          {navLinks.map((link, index) => (
            <li key={index} className="px-6">
              <Link href={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>

        {/* hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
          {!toggleMenu ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>

        {/* mobile links */}
        <ul
          className={
            !toggleMenu
              ? "hidden"
              : "md:hidden absolute top-0 left-0 w-full h-screen bg-dark flex flex-col justify-center items-center"
          }
        >
          {navLinks.map((link, index) => (
            <li key={index} className="py-6 text-3xl x-20 bg-red-200">
              <Link onClick={handleClick} href={link.to}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
