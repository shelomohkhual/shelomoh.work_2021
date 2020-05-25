import React from "react";

const HeadingAttribute = ({ label, children }) => {
  return (
    <div className="attribute-item">
      <p className="attribute-lable">{label}</p>
      <p className="attribute-detail">{children}</p>
    </div>
  );
};

export default HeadingAttribute;
