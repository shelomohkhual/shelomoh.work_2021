import React from "react";
import { Link } from "gatsby";

const ProjectPreview = ({ title, description, slug, imageData }) => (
  <div className="project-preview">
    <Link to={`/work/${slug}/`}>
      {/* <Image fluid={imageData} alt={title} /> */}
      <img src={imageData} />
    </Link>
    <h2>
      <Link to={`/work/${slug}/`}>{title}</Link>
    </h2>
    <p>{description}</p>
    <p>
      <Link to={`/work/${slug}/`}>View this project &rarr;</Link>
    </p>
  </div>
);

export default ProjectPreview;
