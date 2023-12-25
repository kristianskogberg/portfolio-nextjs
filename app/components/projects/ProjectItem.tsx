import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { FaEye, FaCode } from "react-icons/fa";

type Project = {
  title: string;
  image: StaticImageData;
  demoUrl: string;
  codeUrl: string | null;
  description: string;
  skills: string[];
  imageOnRight?: boolean;
};

export default function ProjectItem({
  title,
  image,
  demoUrl,
  codeUrl,
  description,
  skills,
}: Project) {
  return (
    <div className="grid grid-cols-1 lg:flex flex-row pb-40 gap-10">
      {/* project image */}
      <div className="">
        <Image src={image} alt={`project ${title}`} quality={95} className="" />
      </div>

      {/* project info */}
      <div className="flex flex-col gap-y-6">
        <h2 className="text-2xl sm:text-2xl font-bold ">{title}</h2>
        <div className=" flex flex-row justify-left items-center flex-wrap gap-6 ">
          {skills.map((skill) => (
            <p className="font-code text-gray-400">{skill}</p>
          ))}
        </div>
        <p>{description}</p>
        <div className="flex flex-row flex-wrap gap-6">
          <Button text="Demo Video" icon={<FaEye />} url={demoUrl} />
          {codeUrl == null ? (
            <Button text="Private" icon={<FaCode />} disable={true} />
          ) : (
            <Button text="Code" icon={<FaCode />} url={codeUrl} />
          )}
        </div>
      </div>
    </div>
  );
}
