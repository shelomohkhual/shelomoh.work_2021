import React from "react";
import TransitionLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image";
import { accentHexColor } from "../components/layout";

const ProjectPreview = ({ title, service, slug, imageData }) => (
  <TransitionLink
    paintDrip
    hex={accentHexColor}
    to={`/work/${slug}/`}
    className="project-preview-container"
  >
    {/* <Image fluid={imageData} alt={title} /> */}
    <div className="project-preview-details-container">
      <p className="project-preview-details-service">{service}</p>
      <h3 className="project-preview-details-title">
        {title}
        <span className="hover-dash" />
      </h3>
    </div>
    {/* <div className="project-preview-image-container"> */}
    {/* <img src={imageData} /> */}
    <Img fluid={imageData} className="project-preview-image-container" />
    {/* </div> */}
  </TransitionLink>
);

export default ProjectPreview;
