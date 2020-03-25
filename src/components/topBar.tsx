import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import { faBars, faSlash } from "@fortawesome/free-solid-svg-icons";
// import MobileNavBar from "./mobile-navbar";
import React from "react";

interface TopBarProps {}

interface TopBarState {
  isOpen: boolean;
}

export default class TopBar extends React.Component<TopBarProps, TopBarState> {
  constructor(props: TopBarProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  open() {
    this.setState({ isOpen: true });
  }

  close() {
    this.setState({ isOpen: false });
  }

  render() {
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
            <Link to="/">
              <span className="logo">SHELOMOH</span>
            </Link>
          </div>
          <span className={mobileNavBarIconOpen()}>
            <FontAwesomeIcon
              className="mobile-navbar-icon-open"
              icon={faBars}
              onClick={() => this.open()}
            />
          </span>
          <div className="topbar-item social-container">
            <a target="_blank" href="https://www.instagram.com/shelomoh">
              <FontAwesomeIcon
                className="social-icon instagram"
                icon={faInstagram}
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/shelomoh">
              <FontAwesomeIcon
                className="social-icon linkedin"
                icon={faLinkedinIn}
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/shelomoh">
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
            <Link to="/">
              <a className="mobile-navbar-item-link-container">
                <span className="mobile-navbar-item-link ">HOME</span>
              </a>
            </Link>

            <Link to="/work">
              <a className="mobile-navbar-item-link-container">
                <span className="mobile-navbar-item-link ">Work</span>
              </a>
            </Link>

            <Link to="/contact">
              <a className="mobile-navbar-item-link-container">
                <span className="mobile-navbar-item-link ">Contact</span>
              </a>
            </Link>
            <span className="divider" />
            <div className="mobile-social-container">
              <a target="_blank" href="https://www.instagram.com/shelomoh">
                <FontAwesomeIcon
                  className="social-icon instagram"
                  icon={faInstagram}
                />
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/in/shelomoh-khual-17258872"
              >
                <FontAwesomeIcon
                  className="social-icon linkedin"
                  icon={faLinkedinIn}
                />
              </a>
              <a target="_blank" href="https://www.github.com/shelomohkhual">
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
