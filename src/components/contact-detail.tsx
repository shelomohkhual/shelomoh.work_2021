import React from "react";
import Img, { FluidObject } from "gatsby-image";

interface ContactPageInterface {
  // email: string;
  // phone: string;
  heading: string;
  description: string;
  // image?: string;
  image?: any;
  // image?: FluidObject;
  cv?: FluidObject;
}

const ContactDetail = (contactDetails: ContactPageInterface) => {
  // const aboutImage = contactDetails.image ? (
  //   <div className="img-container">
  //     <img src={contactDetails.image} className="contact-image" />

  //     {/* <Image
  //       fluid={contactDetails.image}
  //       alt={contactDetails.heading}
  //       className="contact-image"
  //     /> */}
  //   </div>
  // ) : (
  //   <div />
  // );

  // const downloadCV = contactDetails.cv ? (
  //   <a href={contactDetails.cv.src} className="contact-cv">
  //     Download CV
  //   </a>
  // ) : (
  //   <div />
  // );

  return (
    <div className="contact-container">
      {/* <div className="contact-image-container"> */}
      <Img fluid={contactDetails.image} className="contact-image-container" />
      {/* <img src={contactDetails.image} className="contact-image" /> */}
      {/* {aboutImage} */}
      {/* </div> */}
      <div className="contact-detail-container">
        <h2 className="contact-detail-heading">{contactDetails.heading}</h2>
        <p className="contact-detail-des">{contactDetails.description}</p>
        {/* {downloadCV} */}
      </div>
      <hr className="bottom-divider contact-bottom-divider"></hr>
    </div>
  );
};
export default ContactDetail;
