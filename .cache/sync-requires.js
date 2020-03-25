const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-project-tsx": hot(preferDefault(require("/Users/shelomohkhual/shelomohkhual.github/shelomoh.work/src/templates/project.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/shelomohkhual/shelomohkhual.github/shelomoh.work/.cache/dev-404-page.js"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/Users/shelomohkhual/shelomohkhual.github/shelomoh.work/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/shelomohkhual/shelomohkhual.github/shelomoh.work/src/pages/index.tsx"))),
  "component---src-pages-work-tsx": hot(preferDefault(require("/Users/shelomohkhual/shelomohkhual.github/shelomoh.work/src/pages/work.tsx")))
}

