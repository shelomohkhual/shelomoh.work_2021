import React from "react";
import { Link } from "gatsby";
import TopBar from "./TopBar";

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
        <Link
          to="/work"
          className="navbar-item-link-container"
          activeClassName="active"
          getProps={({ location }) => workPathsLocation(location)}
        >
          {/* <p className="navbar-item-link-container"> */}
          <span className="navbar-item-link ">Work</span>
          {/* </p> */}
        </Link>

        <Link
          to="/contact"
          className="navbar-item-link-container"
          activeClassName="active"
        >
          {/* <p className="navbar-item-link-container"> */}
          <span className="navbar-item-link ">Contact</span>
          {/* </p> */}
        </Link>
      </div>
      <main className="main-container">{children}</main>
    </div>
  </React.Fragment>
);

export default Layout;
