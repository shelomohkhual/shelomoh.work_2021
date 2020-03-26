import ContactDetail from "../components/contact-detail";
import Layout from "../components/layout";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FluidObject } from "gatsby-image";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactDetailsJson {
      dataJson {
        description
        email
        heading
        image {
          childImageSharp {
            fluid {
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

  return (
    <Layout>
      <ContactDetail
        email={email}
        phone={phone}
        heading={heading}
        description={description}
        image={imageData}
        // cv={cv}
      />
    </Layout>
  );
};

export default Contact;
