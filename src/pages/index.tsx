import React from "react";
import Layout from "../components/layout";
import { StaticQuery, graphql } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <h1>{data.site.siteMetadata.title}</h1>
        {/* <p>{data.site.siteMetadata.description}</p> */}
        <p>{data.site.siteMetadata.description}</p>
      </Layout>
    )}
  />
);
