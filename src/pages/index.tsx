import React from "react";
import Layout from "../components/layout";
import { StaticQuery, graphql } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query IndexJson {
        indexJson {
          title
          description
        }
      }
    `}
    render={(data) => (
      <Layout>
        <div className="index-container">
          <h1 className="index-title">{data.indexJson.title}</h1>
          <a className="index-des">
            {data.indexJson.description}
            <span className="dash-line-animation " />
          </a>
        </div>
      </Layout>
    )}
  />
);
