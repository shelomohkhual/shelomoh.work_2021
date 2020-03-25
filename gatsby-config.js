module.exports = {
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
    }
  ]
};
