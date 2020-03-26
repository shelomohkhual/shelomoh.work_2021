import React from "react";

const HeadingBar = ({ title, children }) => {
  return (
    <div className="header-container">
      <div className="heading-container">
        <a className="heading-title">{title}</a>
      </div>
      <div className="attribute-container">{children}</div>
    </div>
  );
};

export default HeadingBar;
