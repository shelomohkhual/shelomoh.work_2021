import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Project } from "../components/project";
import HeadingBar from "../components/heading-bar";
import HeadingAttribute from "../components/heading-attribute";

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      client
      service
      description
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      archieve
      subHeadTitle
      subContent
      subContentImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
  const imageData = project.image.childImageSharp.fluid;
  const archieve = project.archieve;

  return (
    <Layout>
      <HeadingBar key={title} title={title}>
        <HeadingAttribute label="client">
          <span>{client}</span>
        </HeadingAttribute>
        <HeadingAttribute label="SERVICE">
          <span>{service}</span>
        </HeadingAttribute>
      </HeadingBar>
      <Project
        title={title}
        client={client}
        service={service}
        description={description}
        imageData={imageData}
        archieve={archieve}
        subHeadTitle={project.subHeadTitle}
        subContent={project.subContent}
        subContentImage={project.subContentImage.childImageSharp.fluid}
      />
    </Layout>
  );
};

export default ProjectTemplate;
