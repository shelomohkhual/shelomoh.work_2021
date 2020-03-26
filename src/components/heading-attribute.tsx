import React from "react";

const HeadingAttribute = ({ label, children }) => {
  return (
    <div className="attribute-item">
      <span className="attribute-lable">{label}</span>
      <span className="attribute-detail">{children}</span>
    </div>
  );
};

export default HeadingAttribute;
