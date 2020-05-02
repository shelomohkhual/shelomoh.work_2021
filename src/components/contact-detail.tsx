import React from "react";
import { FluidObject } from "gatsby-image";
// import { mainTopicComponent } from "./project";

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
      {/* <Img fluid={contactDetails.image} className="contact-image-container" /> */}
      {/* <img src={contactDetails.image} className="contact-image" /> */}
      {/* {aboutImage} */}
      {/* </div> */}
      {/* <div className="contact-detail-container"> */}
      <div>
        <h2 className="contact-detail-heading">Hi!</h2>
        <p className="contact-detail-des">{contactDetails.description}</p>
        {/* {downloadCV} */}

        {/* <div className="contact-content-container">
          <div className="contact-title-col">
            <div className="heading-container">
              <span className="contact-title">What I Do —</span>
            </div>
          </div>
          <div className="contact-content-col">
            <div className="contact-li">
              <li>Branding</li>
              <li>UI/UX</li>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Mobile Development</li>
            </div>
          </div>
        </div> */}

        <div className="contact-content-container">
          <div className="contact-title-col">
            <div className="heading-container">
              <span className="contact-title">Recent Experience —</span>
            </div>
          </div>
          <div className="contact-content-col">
            <h5>
              Full-stack Developer :{" "}
              <a
                className="clickable-link"
                target="_blank"
                href="https://recodemalaysia.com"
              >
                re.code
              </a>
            </h5>
            <span className="contact-year">Oct 2019 - Feb 2020</span>
            <p>
              Assigned to develop a mobile and web apps as a team based project.
              I’ve improved my coding such as structuring before codes, using
              comments to explain what it’s about and enhanced my problem
              solving skills and learn new design patterns like RxDart, new
              languages such as Dart, React, Typescripts and Go. I was able to
              help the new company about branding, designing webpage and able to
              publish through wordpress.
            </p>
          </div>
        </div>

        <div className="contact-content-container">
          <div className="contact-title-col">
            <div className="heading-container">
              <span className="contact-title">Expertise —</span>
            </div>
          </div>
          <div className="contact-content-col">
            <div className="contact-li">
              <h5>Design</h5>
              <div>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Sketch</li>
              </div>
              <br />
              <h5>Web Development</h5>
              <div>
                <li>HTML</li>
                <li>CSS</li>
                <li>ES6 - JS</li>
                <li>React</li>
                <li>Ruby on Rails</li>
              </div>
              <br />

              <h5>Mobile Development</h5>
              <li>Dart - Flutter</li>
            </div>
          </div>
        </div>
      </div>

      <hr className="bottom-divider contact-bottom-divider"></hr>
    </div>
  );
};
export default ContactDetail;
