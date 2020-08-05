import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ProjectPreview from "../components/project-preview";
import HeadingBar from "../components/heading-bar";
import { FluidObject } from "gatsby-image";

const Work = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            service
            coverImg {
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
  `);

  const projects = data.allProjectsJson.edges;
  return (
    <Layout
      page={{
        pageTitle: "work",
        pageHeading: "selected work",
        pageDes: "selected work",
        slug: "work",
      }}
    >
      <HeadingBar title="selected work">
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
          // const imageData = project.coverImg.childImageSharp.fluid.originalImg;
          const imageData: FluidObject = project.coverImg.childImageSharp.fluid;
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
        <div className="last-project-divider">
          <hr className="divider" />
          <p className="more-to-come">More to come</p>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
