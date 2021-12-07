import TransitionLink from "gatsby-plugin-transition-link/AniLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faBars, faSlash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { accentHexColor } from "../components/layout";
// import { useStaticQuery, graphql } from "gatsby";

interface TopBarProps {
  title: string;
  instagramLink: string;
  twitterLink: string;
  githubLink: string;
  linkedInLink: string;
}
interface TopBarState {
  isOpen: boolean;
}
export default class TopBar extends React.Component<TopBarProps, TopBarState> {
  constructor(props: TopBarProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  open() {
    this.setState({ isOpen: true });
  }

  close() {
    this.setState({ isOpen: false });
  }

  // useSiteMetadata() {
  //   const data = useStaticQuery(graphql`
  //     query siteData {
  //       site {
  //         siteMetadata {
  //           title
  //           titleTemplate
  //           url
  //           image
  //           description
  //         }
  //       }
  //       infoJson {
  //         contact {
  //           email
  //           github
  //           instagram
  //           linkedin
  //           twitter
  //         }
  //       }
  //     }
  //   `);

  //   return data.siteData;
  // }

  render() {
    // const something = infoData.site.siteMetadata;
    // const useSiteMetadata = () => {
    //   return useStaticQuery(graphql`
    //     query siteData {
    //       site {
    //         siteMetadata {
    //           title
    //           titleTemplate
    //           url
    //           image
    //           description
    //         }
    //       }
    //       infoJson {
    //         contact {
    //           email
    //           github
    //           instagram
    //           linkedin
    //           twitter
    //         }
    //       }
    //     }
    //   `);
    // };

    // const siteMetadata = useSiteMetadata();
    // const contactData = data.infoJson.contact;

    const title = this.props.title;
    const linkedInLink =
      "https://www.linkedin.com/in/" + this.props.linkedInLink;
    const instagramLink =
      "https://www.instagram.com/" + this.props.instagramLink;
    const githubLink = "https://www.github.com/" + this.props.githubLink;

    // const linkedInLink = "https://www.linkedin.com/in/shelomohkhual";
    // const instagramLink = "https://www.instagram.com/shelomoh";
    // const githubLink = "https://www.github.com/shelomohkhual";

    const topBarNavBarColClass = () => {
      const classes = ["topbar-navbar-col"];
      this.state.isOpen ? classes.push("show") : classes.push("");
      return classes.join(" ");
    };
    const mobileNavBarContainer = () => {
      const classes = ["mobile-navbar-container"];
      this.state.isOpen ? classes.push("show") : classes.push("");
      return classes.join(" ");
    };
    const mobileNavBarIconOpen = () => {
      const classes = ["mobile-navbar-icon-open-wrapper"];
      !this.state.isOpen ? classes.push("show") : classes.push("");
      return classes.join(" ");
    };
    const mobileNavBarIconClose = () => {
      const classes = ["mobile-navbar-icon-close-wrapper"];
      this.state.isOpen ? classes.push("show") : classes.push("");
      return classes.join(" ");
    };

    return (
      <div className="topbar-container">
        <div className="topbar-logo-col">
          <div className="topbar-item">
            <TransitionLink
              paintDrip
              hex={accentHexColor}
              to="/"
              className="topbar-item-link-container"
              activeClassName="active"
            >
              <span className="topbar-item-link logo">
                {title}
                <span
                  className="hover-dash"
                  style={{
                    margin: "0 0 5px 1vw",
                  }}
                />
              </span>
            </TransitionLink>
          </div>
          <span className={mobileNavBarIconOpen()}>
            <FontAwesomeIcon
              className="mobile-navbar-icon-open"
              icon={faBars}
              onClick={() => this.open()}
            />
          </span>
          <div className="topbar-item social-container">
            <a target="_blank" href={instagramLink}>
              <FontAwesomeIcon
                className="social-icon instagram"
                icon={faInstagram}
              />
            </a>
            <a target="_blank" href={linkedInLink}>
              <FontAwesomeIcon
                className="social-icon linkedin"
                icon={faLinkedinIn}
              />
            </a>
            <a target="_blank" href={githubLink}>
              <FontAwesomeIcon className="social-icon github" icon={faGithub} />
            </a>
          </div>
        </div>
        <div className={topBarNavBarColClass()}>
          <span className={mobileNavBarIconClose()}>
            <FontAwesomeIcon
              className="mobile-navbar-icon-close"
              icon={faSlash}
              onClick={() => this.close()}
            />
          </span>
          <div className={mobileNavBarContainer()}>
            <TransitionLink paintDrip hex={accentHexColor} to="/">
              <p className="mobile-navbar-item-link-container">
                <span className="mobile-navbar-item-link ">HOME</span>
              </p>
            </TransitionLink>

            <TransitionLink paintDrip hex={accentHexColor} to="/work">
              <p className="mobile-navbar-item-link-container">
                <span className="mobile-navbar-item-link ">Work</span>
              </p>
            </TransitionLink>

            <TransitionLink paintDrip hex={accentHexColor} to="/info">
              <p className="mobile-navbar-item-link-container">
                <span className="mobile-navbar-item-link ">info</span>
              </p>
            </TransitionLink>
            <span className="divider" />
            <div className="mobile-social-container">
              <a target="_blank" href={instagramLink}>
                <FontAwesomeIcon
                  className="social-icon instagram"
                  icon={faInstagram}
                />
              </a>
              <a target="_blank" href={linkedInLink}>
                <FontAwesomeIcon
                  className="social-icon linkedin"
                  icon={faLinkedinIn}
                />
              </a>
              <a target="_blank" href={githubLink}>
                <FontAwesomeIcon
                  className="social-icon github"
                  icon={faGithub}
                />
              </a>
            </div>
          </div>
          {/* <MobileNavBar /> */}
        </div>
      </div>
    );
  }
}
