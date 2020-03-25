// import React from "react";
// import {  Link } from "gatsby"

// // import { useRouter } from "next/router";

// export default ({ href, children }) => {
//   const router = useRouter();

//   let className = children.props.className || "";

//   if (
//     router.pathname === href ||
//     (href === "/work" && router.pathname === "/work/[project]")
//   ) {
//     className = `${className} active`;
//   }
//   return (
//     <Link
//     to={href}
//     >{React.cloneElement(children, { className })}</Link>
//   );
// };
