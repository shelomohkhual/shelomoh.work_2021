import InfoDetail from "../components/info-detail";
import Layout from "../components/layout";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import HeadingBar from "../components/heading-bar";
import HeadingAttribute from "../components/heading-attribute";
// import Project from "../components/project";

const Info = () => {
  const data = useStaticQuery(graphql`
    query InfoDetailsJson {
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
      }
    }
  `);

  const infoDetails = data.dataJson;
  const email = infoDetails.email;
  // const phone = infoDetails.phone;
  const heading = infoDetails.heading;
  const description = infoDetails.description;
  // const cv: FluidObject = contactDetails.cv.childImageSharp.fluid;
  const imageData: FluidObject = infoDetails.image.childImageSharp.fluid;
  // const imageData = contactDetails.image.childImageSharp.original.src;

  return (
    <Layout>
      <HeadingBar key="info" title="info">
        {/* <HeadingAttribute label="h/p:">
          <span>{phone}</span>
        </HeadingAttribute> */}
        <HeadingAttribute label="email:">
          <a className="clickable-link" href={`mailto:${email}`}>
            {email}
          </a>
        </HeadingAttribute>
      </HeadingBar>
      <InfoDetail
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

export default Info;
