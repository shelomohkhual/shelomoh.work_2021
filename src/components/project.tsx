import React from "react";

export interface ProjectInterface {
  title: string;
  client: string;
  service: string;
  description: string;
  imageData: string;
  archieve: string;
  subHeadTitle?: string;
  subContent?: string;
  subContentImage?: string;
}

export const Project = (project: ProjectInterface) => {
  const heading2 = (
    <div className="heading2-container">
      <div className="heading2-left-col">
        <div className="heading-container">
          <span className="project-subhead-title">ARCHIEVE</span>
        </div>
      </div>
      <div className="heading2-right-col">
        <p className="project-des">{project.archieve}</p>
      </div>
    </div>
  );

  const heading3 = project.subHeadTitle ? (
    <div className="heading3-container">
      <div className="heading3-left-col">
        {project.subHeadTitle ? (
          <div className="heading-container">
            <span className="project-subhead-title">
              {project.subHeadTitle}
            </span>
          </div>
        ) : (
          <div />
        )}
        {project.subContent ? (
          <p className="project-des">{project.subContent}</p>
        ) : (
          <div />
        )}
      </div>
      <div className="heading3-right-col">
        {project.subContentImage ? (
          // <Image fluid={project.subContentImage} alt={project.subHeadTitle} />
          <img src={project.subContentImage} />
        ) : (
          // <img src={project.subContentImage.src} />
          <div />
        )}
      </div>
    </div>
  ) : (
    <div />
  );

  return (
    <div className="project-container">
      <p className="project-des">{project.description}</p>
      <div className="project-img-container">
        {/* <Image fluid={project.imageData} alt={project.title} /> */}
        <img src={project.imageData} />
      </div>
      {heading2}
      {heading3}
      <hr className="bottom-divider"></hr>
    </div>
  );
};

export default Project;
