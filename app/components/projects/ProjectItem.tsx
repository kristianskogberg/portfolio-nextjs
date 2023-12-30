import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { Fragment } from "react";
import LinkButton from "../LinkButton";
import { FaEye, FaCode } from "react-icons/fa";
import ImageCarousel from "../ImageCarousel";

type Project = {
  title: string;
  images: StaticImageData[];
  demoUrl: string;
  codeUrl: string | null;
  description: string;
  skills: string[];
  imageOnRight?: boolean;
  index: number;
};

export default function ProjectItem({
  title,
  images,
  demoUrl,
  codeUrl,
  description,
  skills,
  index,
}: Project) {
  return (
    <div className={`grid grid-cols-1 lg:flex flex-row pb-40 gap-10 `}>
      {/* project image */}
      <div
        className={`lg:w-3/5 flex justify-center items-center ${
          index % 2 !== 0 ? "order-1" : "order-1 lg:-order-1"
        }`}
      >
        <Image
          src={images[0]}
          alt={title}
          className="max-h-[600px] object-scale-down"
        />
      </div>

      {/* project info */}
      <div className="flex flex-col gap-y-6 w-full lg:w-2/5">
        <h2 className="text-2xl sm:text-2xl font-bold ">{title}</h2>
        <div className=" flex flex-row justify-left items-center flex-wrap gap-6 ">
          {skills.map((skill) => (
            <Fragment key={skill}>
              <p className="font-code text-gray-400">{skill}</p>
            </Fragment>
          ))}
        </div>
        <p>{description}</p>
        <div className="flex flex-row flex-wrap gap-6">
          <LinkButton
            text="Demo Video"
            icon={<FaEye />}
            url={demoUrl}
            openInNewTab={true}
          />
          {codeUrl == null ? (
            <LinkButton
              text="Private"
              icon={<FaCode />}
              disable={true}
              url=""
              openInNewTab={true}
            />
          ) : (
            <LinkButton
              text="Code"
              icon={<FaCode />}
              url={codeUrl}
              openInNewTab={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}
