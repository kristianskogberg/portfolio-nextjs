"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const KS = "<ks>";

const navLinks = [
  { to: "#about", text: "about" },
  { to: "#skills", text: "skills" },
  { to: "#projects", text: "projects" },
  { to: "#contact", text: "contact" },
];

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleClick() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <header className="z-20 px-4 md:px-8 min-h-[50px] font-code  bg-dark/90 backdrop-blur-md fixed top-0 flex flex-col items-center justify-between mx-auto w-full">
      <div className="flex flex-row justify-between mx-auto items-center w-full  max-w-7xl ">
        <div className="flex flex-row items-center ">
          <Link href="/">
            <h1 className=" pr-3 text-2xl font-bold cursor-pointer text-accent">
              {KS}
            </h1>
          </Link>
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
            target="_blank"
          />
        </div>

        <div>
          {/* desktop links */}

          <nav>
            <ul className="hidden md:flex ">
              {navLinks.map((link, index) => (
                <li key={index} className="px-6 hover:text-accent duration-200">
                  <Link href={link.to}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* hamburger */}
          <div onClick={handleClick} className="md:hidden z-50 cursor-pointer">
            {!toggleMenu ? <FaBars size={25} /> : <FaTimes size={25} />}
          </div>
        </div>
      </div>
      {/* mobile links */}

      {toggleMenu ? (
        <nav className="md:hidden w-full mobile-links-container">
          <ul>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="p-4 w-full hover:text-accent duration-200"
              >
                <Link onClick={handleClick} href={link.to}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
