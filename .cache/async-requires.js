// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-project-tsx": () => import("./../src/templates/project.tsx" /* webpackChunkName: "component---src-templates-project-tsx" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-contact-tsx": () => import("./../src/pages/contact.tsx" /* webpackChunkName: "component---src-pages-contact-tsx" */),
  "component---src-pages-index-tsx": () => import("./../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-work-tsx": () => import("./../src/pages/work.tsx" /* webpackChunkName: "component---src-pages-work-tsx" */)
}

