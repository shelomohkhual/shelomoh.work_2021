import React from "react";
import { Link } from "gatsby";
import TopBar from "./TopBar";

const scrollDown = <p className="scroll"> SCROLL - >> </p>;

const Layout = ({ children }) => (
  <React.Fragment>
    <div className="layout-container">
      <TopBar />

      {/* NAVBAR */}
      <div className="navbar">
        <Link to="/work">
          <a className="navbar-item-link-container">
            <span className="navbar-item-link ">Work</span>
          </a>
        </Link>

        <Link to="/contact">
          <a className="navbar-item-link-container">
            <span className="navbar-item-link ">Contact</span>
          </a>
        </Link>
      </div>
      <main className="main-container">{children}</main>
    </div>
  </React.Fragment>
);

export default Layout;
