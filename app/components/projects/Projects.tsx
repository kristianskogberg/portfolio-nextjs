import React from "react";
import { projectsData } from "@/app/data/projects";
import ProjectItem from "./ProjectItem";

type Props = {};

const title = "<projects>";

export default function Projects({}: Props) {
  return (
    <div className="min-h-screen max-w-7xl mx-auto text-left justify-start items-center flex flex-col pt-[30px]">
      <h2 className="text-m text-gray-500 tracking-wide py-6">{title}</h2>
      <p>Some of my recent projects:</p>
      <div className="py-6 ">
        {projectsData.map((project) => (
          <ProjectItem
            image={project.image}
            imageOnRight={true}
            title={project.title}
            description={project.description}
            demoUrl={project.demo}
            codeUrl={project.code}
            skills={project.skills}
          />
        ))}
      </div>
    </div>
  );
}
