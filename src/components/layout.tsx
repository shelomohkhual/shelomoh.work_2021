import React from "react";
import { Link } from "gatsby";
import TopBar from "./TopBar";

// const scrollDown = <p className="scroll"> SCROLL - >> </p>;

const Layout = ({ children }) => (
  <React.Fragment>
    <div className="layout-container">
      <TopBar />

      {/* NAVBAR */}
      <div className="navbar">
        <Link to="/work">
          <p className="navbar-item-link-container">
            <span className="navbar-item-link ">Work</span>
          </p>
        </Link>

        <Link to="/contact">
          <p className="navbar-item-link-container">
            <span className="navbar-item-link ">Contact</span>
          </p>
        </Link>
      </div>
      <main className="main-container">{children}</main>
    </div>
  </React.Fragment>
);

export default Layout;
