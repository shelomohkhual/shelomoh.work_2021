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
        paintDrip
        hex="#d20000"
        to="/work/"
        className="navbar-item-link-container"
        activeClassName="active"
        getProps={({ location }) => workPathsLocation(location)}
      >
        <span className="navbar-item-link ">Work</span>
      </TransitionLink>
      <TransitionLink
        paintDrip
        hex="#d20000"
        to="/info/"
        className="navbar-item-link-container"
        activeClassName="active"
      >
        <span className="navbar-item-link ">info</span>
      </TransitionLink>
    </div>
  );
};

export default Navbar;
