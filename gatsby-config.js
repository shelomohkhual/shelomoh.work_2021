module.exports = {
  siteMetadata: {
    title: `Shelomoh`,
    description: `Full-Stack Developer • Graphic Designer`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-typescript",
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: "./data",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`inter\:100,200,300,400,500,600,700,800,900`],
        display: "swap",
      },
    },
  ],
};
