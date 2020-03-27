import React from "react";
import TopBar from "./topBar";
import TransitionLink from "gatsby-plugin-transition-link/AniLink";
// const scrollDown = <p className="scroll"> SCROLL - >> </p>;

const workPathsLocation = props => {
  const currentLocation = props.pathname;
  if (currentLocation.includes("work")) {
    return { className: "navbar-item-link-container active" };
  }
};

const Layout = ({ children }) => (
  <React.Fragment>
    <div className="layout-container">
      <TopBar />
      <div className="navbar">
        <TransitionLink
          fade
          to="/work"
          className="navbar-item-link-container"
          activeClassName="active"
          getProps={({ location }) => workPathsLocation(location)}
        >
          <span className="navbar-item-link ">Work</span>
        </TransitionLink>
        <TransitionLink
          fade
          to="/contact"
          className="navbar-item-link-container"
          activeClassName="active"
        >
          <span className="navbar-item-link ">Contact</span>
        </TransitionLink>
      </div>
      <main className="main-container">{children}</main>
    </div>
  </React.Fragment>
);

export default Layout;
