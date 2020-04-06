import React from "react";
import TopBar from "./topBar";
import Navbar from "./navbar";
// const scrollDown = <p className="scroll"> SCROLL - >> </p>;

const Layout = ({ children }) => (
  <div className="layout-container">
    <TopBar />
    <Navbar />
    <main className="main-container">{children}</main>
  </div>
);

export default Layout;
