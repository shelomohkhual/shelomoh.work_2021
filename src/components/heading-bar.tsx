import React from "react";
import { headingRightDash } from "./project";

const HeadingBar = ({ title, children }) => {
  return (
    <div className="header-container">
      <div className="heading-container heading-title">
        <span className="heading-title">
          {title}
          {headingRightDash}
        </span>
      </div>
      <div className="attribute-container">{children}</div>
    </div>
  );
};

export default HeadingBar;
