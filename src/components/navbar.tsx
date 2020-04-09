import TransitionLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";

export const workPathsLocation = (props) => {
  const currentLocation = props.pathname;
  if (currentLocation.includes("work")) {
    return { className: "navbar-item-link-container active" };
  }
};

const Navbar = () => {
  return (
    <div className="navbar">
      <TransitionLink
        fade
        to="/work/"
        className="navbar-item-link-container"
        activeClassName="active"
        getProps={({ location }) => workPathsLocation(location)}
      >
        <span className="navbar-item-link ">Work</span>
      </TransitionLink>
      <TransitionLink
        fade
        to="/contact/"
        className="navbar-item-link-container"
        activeClassName="active"
      >
        <span className="navbar-item-link ">Contact</span>
      </TransitionLink>
    </div>
  );
};

export default Navbar;
