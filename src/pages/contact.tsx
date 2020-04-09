import ContactDetail from "../components/contact-detail";
import Layout from "../components/layout";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import HeadingBar from "../components/heading-bar";
import HeadingAttribute from "../components/heading-attribute";
// import Project from "../components/project";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactDetailsJson {
      dataJson {
        description
        email
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        phone
      }
    }
  `);

  const contactDetails = data.dataJson;
  const email = contactDetails.email;
  const phone = contactDetails.phone;
  const heading = contactDetails.heading;
  const description = contactDetails.description;
  // const cv: FluidObject = contactDetails.cv.childImageSharp.fluid;
  const imageData: FluidObject = contactDetails.image.childImageSharp.fluid;
  // const imageData = contactDetails.image.childImageSharp.original.src;

  return (
    <Layout>
      <HeadingBar key="contact" title="contact">
        <HeadingAttribute label="h/p:">
          <span>{phone}</span>
        </HeadingAttribute>
        <HeadingAttribute label="email:">
          <a href={`mailto:${email}`}>{email}</a>
        </HeadingAttribute>
      </HeadingBar>
      <ContactDetail
        // email={email}
        // phone={phone}
        heading={heading}
        description={description}
        image={imageData}
        // cv={cv}
      />
    </Layout>
  );
};

export default Contact;
