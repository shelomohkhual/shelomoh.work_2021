import React from "react";
import TopBar from "./topBar";
import Navbar from "./navbar";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

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
        }
      }
      infoJson {
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

  const title = !page
    ? siteMetadata.title
    : page !== "index"
    ? `${page} • ${siteMetadata.title}`
    : siteMetadata.title;
  const description = siteMetadata.description;

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* <html lang={en} /> */}
        {/* <link rel="canonical" href={href} /> */}
        <meta name="docsearch:version" content="2.0" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <meta charSet="utf-8" />
        {/* <meta property="og:url" content={href} /> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:locale" content={locale} /> */}
        <meta property="og:site_name" content={title} />
        {/* <meta property="og:image" content={`${siteUrl}${gatsbyIcon}`} /> */}
        <meta property="og:image:alt" content="shelomoh.work" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />

        <meta name="twitter:card" content="summary" />
        {/* <meta name="twitter:site" content={twitter} /> */}
      </Helmet>
      <div className="layout-container">
        <TopBar
          title={siteMetadata.title}
          instagramLink={contactData.instagram}
          twitterLink={contactData.twitter}
          githubLink={contactData.githubLink}
          linkedInLink={contactData.linkedin}
        />
        <Navbar />
        <main className="main-container">{children}</main>
      </div>
    </>
  );
};

export default Layout;
