import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

type Skill = {
  image: StaticImageData;
  name: string;
};

export default function SkillItem({ name, image }: Skill) {
  return (
    <div className="py-4">
      <Image
        className="w-16 mx-auto hover:scale-110 duration-[250ms]"
        src={image}
        alt={name}
      />
      <p className="my-4 font-fira">{name}</p>
    </div>
  );
}
