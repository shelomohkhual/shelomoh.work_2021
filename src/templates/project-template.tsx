import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Project } from "../components/project";
import HeadingBar from "../components/heading-bar";
import HeadingAttribute from "../components/heading-attribute";
import { FluidObject } from "gatsby-image";
// import { FluidObject } from "gatsby-image";

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      coverImg {
        childImageSharp {
          fluid(maxWidth: 1200) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      description
      archieve
      client
      title
      slug
      service
      result
      featureTopics {
        title
        des
        imgs {
          label
          images {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;
  const title = project.title;
  const client = project.client;
  const service = project.service;
  const description = project.description;
  const coverImg = project.coverImg.childImageSharp;
  const archieve = project.archieve;
  const featureTopics = project.featureTopics;
  const featureImgs = project.featureImgs;
  const result = project.result;

  return (
    <Layout
      page={{
        pageTitle: title,
        pageHeading: title,
        pageDes: description,
        pageProject: true,
        imageUrl: coverImg.fluid.src,
      }}
    >
      {/* <SEO title={title} description={description} project={true} /> */}
      <HeadingBar key={title} title={title}>
        <HeadingAttribute label="client">{client}</HeadingAttribute>
        <HeadingAttribute label="SERVICE">{service}</HeadingAttribute>
      </HeadingBar>
      <Project
        title={title}
        client={client}
        service={service}
        description={description}
        coverImg={coverImg}
        archieve={archieve}
        featureTopics={featureTopics}
        featureImgs={featureImgs}
        result={result}
      />
    </Layout>
  );
};

export default ProjectTemplate;
