import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ProjectPreview from "../components/project-preview";
import HeadingBar from "../components/heading-bar";

const Work = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            service
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
      <HeadingBar title="seleced work">
        {/* <HeadingAttribute label="client">
          <span>{project.client}</span>
        </HeadingAttribute>
        <HeadingAttribute label="SERVICE">
          <span>{service}</span>
        </HeadingAttribute> */}
      </HeadingBar>
      <div className="project-container">
        {projects.map(({ node: project }, index) => {
          const title = project.title;
          const service = project.service;
          const slug = project.slug;
          const imageData = project.image.childImageSharp.fluid.originalImg;
          return (
            <div key={slug} className="project-preview-wrapper">
              <ProjectPreview
                key={slug}
                title={title}
                service={service}
                slug={slug}
                imageData={imageData}
              />
              {index + 1 !== projects.length ? <hr className="divider" /> : ""}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Work;
