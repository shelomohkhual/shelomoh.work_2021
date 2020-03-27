import React from "react";

const HeadingBar = ({ title, children }) => {
  return (
    <div className="header-container">
      <div className="heading-container heading-title">
        <p className="heading-title">{title}</p>
      </div>
      <div className="attribute-container">{children}</div>
    </div>
  );
};

export default HeadingBar;
