import InfoDetail from "../components/info-detail";
import Layout from "../components/layout";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import HeadingBar from "../components/heading-bar";
import HeadingAttribute from "../components/heading-attribute";
// import useContactData from "components/contactData";

const Info = () => {
  const data = useStaticQuery(graphql`
    query InfoDetailsJson {
      infoJson {
        contact {
          email
          github
          instagram
          linkedin
          twitter
        }
        description
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
  // const { contactData } = useContactData();

  const infoDetails = data.infoJson;
  const emailLink = infoDetails.contact.email;
  // const githubLink = infoDetails.contact.github;
  // const instagramLink = infoDetails.contact.instagram;
  // const linkedInLink = infoDetails.contact.linkedin;
  // const twitterLink = infoDetails.contact.twitter;
  // const phone = contactData.phone;
  const heading = infoDetails.heading;
  const description = infoDetails.description;
  // const cv = data.pdf;
  const imageData: FluidObject = infoDetails.image.childImageSharp.fluid;
  // const imageData = contactDetails.image.childImageSharp.original.src;

  const emailHeadingAttribute = emailLink ? (
    <HeadingAttribute label="email">
      <a className="clickable-link" href={`mailto:${emailLink}`}>
        {emailLink}
      </a>
    </HeadingAttribute>
  ) : (
    <></>
  );

  // const githubHeadingAttribute = githubLink ? (
  //   <HeadingAttribute label="github">
  //     <a className="clickable-link" href={githubLink}>
  //       {githubLink}
  //     </a>
  //   </HeadingAttribute>
  // ) : (
  //   <></>
  // );

  // const instagramHeadingAttribute = instagramLink ? (
  //   <HeadingAttribute label=":">
  //     <a className="clickable-link" href={`mailto:${emailLink}`}>
  //       {emailLink}
  //     </a>
  //   </HeadingAttribute>
  // ) : (
  //   <></>
  // );

  // const linkedInHeadingAttribute = linkedInLink ? (
  //   <HeadingAttribute label="email:">
  //     <a className="clickable-link" href={`mailto:${emailLink}`}>
  //       {emailLink}
  //     </a>
  //   </HeadingAttribute>
  // ) : (
  //   <></>
  // );

  // const twitterHeadingAttribute = twitterLink ? (
  //   <HeadingAttribute label="email:">
  //     <a className="clickable-link" href={`mailto:${emailLink}`}>
  //       {emailLink}
  //     </a>
  //   </HeadingAttribute>
  // ) : (
  //   <></>
  // );

  return (
    <Layout
      page={{
        pageTitle: "info",
        pageHeading: heading,
        pageDes: description,
        slug: "info",
      }}
    >
      <HeadingBar key="info" title="info">
        {emailHeadingAttribute}
        {/* {githubHeadingAttribute}
        {instagramHeadingAttribute}
        {linkedInHeadingAttribute}
        {twitterHeadingAttribute} */}
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
