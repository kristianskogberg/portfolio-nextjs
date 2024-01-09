import React, { Fragment } from "react";
import { projectsData } from "@/app/data/projects";
import ProjectItem from "./ProjectItem";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className=" max-w-7xl mx-auto text-left justify-start items-start flex flex-col pt-[50px]">
      <h2 className="py-6">Projects</h2>
      <p>Here are some of my recent projects:</p>
      <div className="py-6 ">
        {projectsData.map((project, key) => (
          <Fragment key={key}>
            <ProjectItem
              images={project.images}
              imageOnRight={true}
              title={project.title}
              description={project.description}
              demoUrl={project.demo}
              codeUrl={project.code}
              skills={project.skills}
              index={key}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
