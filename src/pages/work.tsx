import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ProjectPreview from "../components/project-preview";

const Work = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            description
            image {
              childImageSharp {
                fluid {
                  originalImg
                }
              }
            }
          }
        }
      }
    }
  `);
  const projects = data.allProjectsJson.edges;

  return (
    <Layout>
      <ul>
        {projects.map(({ node: project }) => {
          const title = project.title;
          const description = project.description;
          const slug = project.slug;
          const imageData = project.image.childImageSharp.fluid.originalImg;

          return (
            <li key={slug}>
              <ProjectPreview
                key={slug}
                title={title}
                description={description}
                slug={slug}
                imageData={imageData}
              />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Work;
