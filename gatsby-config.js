module.exports = {
  siteMetadata: {
    title: `Shelomoh`,
    description: `Full-Stack Developer • Graphic Designer`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: "./data"
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`space mono\:400,400i,700,700i`],
        display: "swap"
      }
    }
  ]
};
