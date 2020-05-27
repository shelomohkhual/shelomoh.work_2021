import React from "react";
import TopBar from "./topBar";
import Navbar from "./navbar";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const accentHexColor = "#D2453F";

const Layout = ({ page, children }) => {
  // const scrollDown = <p className="scroll"> SCROLL - >> </p>;
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          titleTemplate
          url
          description
          image
          keywords
        }
      }
      infoJson {
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        contact {
          email
          github
          instagram
          linkedin
          twitter
        }
      }
    }
  `);

  const siteMetadata = data.site.siteMetadata;
  const contactData = data.infoJson.contact;
  const imageUrl = page.imageUrl
    ? siteMetadata.url + page.imageUrl
    : data.infoJson.image.childImageSharp.fluid.src
    ? siteMetadata.url + data.infoJson.image.childImageSharp.fluid.src
    : siteMetadata.url;

  const title = !page.pageTitle
    ? siteMetadata.title
    : page.pageTitle !== "index"
    ? `${page.pageTitle} | ${siteMetadata.title}`
    : siteMetadata.title;

  let path = "";
  if (page.slug === undefined) {
    path = siteMetadata.url;
  } else if (page.slug !== "info" && page.slug !== "work") {
    path = `${siteMetadata.url + "/work/" + page.slug}`;
  } else {
    path = `${siteMetadata.url + "/" + page.slug}`;
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={path} />
        <link rel="canonical" href={path} />
      </Helmet>

      <div className="layout-container">
        <TopBar
          title={siteMetadata.title}
          instagramLink={contactData.instagram}
          twitterLink={contactData.twitter}
          githubLink={contactData.github}
          linkedInLink={contactData.linkedin}
        />
        <Navbar />
        <main className="main-container">{children}</main>
      </div>
    </>
  );
};

export default Layout;
