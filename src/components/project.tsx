import React from "react";
import { Link } from "gatsby";
import Image, { FluidObject } from "gatsby-image";

export interface ProjectInterface {
  title: string;
  client: string;
  service: string;
  description: string;
  imageData: FluidObject;
  archieve: string;
  subHeadTitle?: string;
  subContent?: string;
  subContentImage?: FluidObject | null;
}

export const Project = (project: ProjectInterface) => {
  const subHead =
    project.subHeadTitle !== null ? (
      <div>
        <h4>{project.subHeadTitle}</h4>
        <p>{project.subContent}</p>
        <Image fluid={project.subContentImage} alt={project.subHeadTitle} />
      </div>
    ) : (
      <div />
    );

  return (
    <div className="project">
      <h1>{project.title}</h1>
      <p>{project.client}</p>
      <p>{project.service}</p>

      <p>{project.description}</p>
      <Image fluid={project.imageData} alt={project.title} />
      <p>{project.archieve}</p>

      {subHead}

      <p>
        <Link to="/">&larr; back to all projects</Link>
      </p>
    </div>
  );
};

export default Project;
