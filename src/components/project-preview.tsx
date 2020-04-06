import React from "react";
import TransitionLink from "gatsby-plugin-transition-link/AniLink";

const ProjectPreview = ({ title, service, slug, imageData }) => (
  <TransitionLink to={`/work/${slug}/`} className="project-preview-container">
    {/* <Image fluid={imageData} alt={title} /> */}
    <div className="project-preview-details-container">
      <p className="project-preview-details-service">{service}</p>
      <h3 className="project-preview-details-title">
        {title}
        <span className="hover-dash" />
      </h3>
    </div>
    <div className="project-preview-image-container">
      <img src={imageData} />
    </div>
  </TransitionLink>
);

export default ProjectPreview;
