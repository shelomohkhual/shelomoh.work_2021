import TransitionLink from "gatsby-plugin-transition-link/AniLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faBars, faSlash } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface TopBarProps {}

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

  render() {
    const linkedInLink = "https://www.linkedin.com/in/shelomoh-khual-17258872";
    const instagramLink = "https://www.instagram.com/shelomoh";
    const githubLink = "https://www.github.com/shelomohkhual";

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
              fade
              to="/"
              className="topbar-item-link-container"
              activeClassName="active"
            >
              <span className="topbar-item-link logo">
                shelomoh
                <span
                  className="hover-dash"
                  style={{
                    margin: "0 0 6px 1vw",
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
            <TransitionLink fade to="/">
              <p className="mobile-navbar-item-link-container">
                <span className="mobile-navbar-item-link ">HOME</span>
              </p>
            </TransitionLink>

            <TransitionLink fade to="/work">
              <p className="mobile-navbar-item-link-container">
                <span className="mobile-navbar-item-link ">Work</span>
              </p>
            </TransitionLink>

            <TransitionLink fade to="/contact">
              <p className="mobile-navbar-item-link-container">
                <span className="mobile-navbar-item-link ">Contact</span>
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
