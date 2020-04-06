import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Project } from "../components/project";
import HeadingBar from "../components/heading-bar";
import HeadingAttribute from "../components/heading-attribute";

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      coverImg {
        childImageSharp {
          fluid {
            originalImg
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
        coverImg {
          childImageSharp {
            fluid {
              originalImg
            }
          }
        }
        des
        imgs {
          label
          images {
            childImageSharp {
              fluid {
                originalImg
              }
            }
          }
        }
      }
      featureImgs {
        label
        images {
          childImageSharp {
            fluid {
              originalImg
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
  const coverImg = project.coverImg.childImageSharp.fluid.originalImg;
  const archieve = project.archieve;
  const featureTopics = project.featureTopics;
  const featureImgs = project.featureImgs;
  const result = project.result;

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
