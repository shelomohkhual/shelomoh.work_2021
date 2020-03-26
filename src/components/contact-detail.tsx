import React from "react";
import Image, { FluidObject } from "gatsby-image";

interface ContactPageInterface {
  email: string;
  phone: string;
  heading: string;
  description: string;
  image?: FluidObject;
  cv?: FluidObject;
}

const ContactDetail = (contactDetails: ContactPageInterface) => {
  const aboutImage = contactDetails.image ? (
    <div className="img-container">
      <Image
        fluid={contactDetails.image}
        alt={contactDetails.heading}
        className="contact-image"
      />
    </div>
  ) : (
    <div />
  );

  // const downloadCV = contactDetails.cv ? (
  //   <a href={contactDetails.cv.src} className="contact-cv">
  //     Download CV
  //   </a>
  // ) : (
  //   <div />
  // );

  return (
    <div className="contact-container">
      {aboutImage}
      <div className="contact-detail">
        <h3 className="contact-heading">{contactDetails.heading}</h3>
        <span className="contact-description">
          {contactDetails.description}
        </span>
        {/* {downloadCV} */}
      </div>
    </div>
  );
};
export default ContactDetail;
