import React from "react";
import { Link } from "gatsby";

const ProjectPreview = ({ title, service, slug, imageData }) => (
  <Link to={`/work/${slug}/`} className="project-preview-container">
    {/* <Image fluid={imageData} alt={title} /> */}
    <div className="project-preview-details-container">
      <p className="project-preview-details-service">{service}</p>
      <h3 className="project-preview-details-title">{title}</h3>
    </div>
    <div className="project-preview-image-container">
      <img src={imageData} />
    </div>
  </Link>
);

export default ProjectPreview;
