module.exports = {
  siteMetadata: {
    title: `shelomoh`,
    titleTemplate: "shelomoh",
    description: `Full-Stack Developer • Graphic Designer`,
    keywords:
      "shelomoh,shelomoh khual,Graphic Designer,Full-stack Developer, Front-end Developer, Portfolio, Gatsby",
    url: "https://shelomoh.work",
    image: "/assets/contact.jpg",
    contact: {
      email: "business@shelomoh.work",
      linkedin: "shelomoh-khual-17258872",
      github: "shelomohkhual",
      instagram: "shelomoh",
      twitter: "shelomohkhual",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-typescript",
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
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
        fonts: [`forum`, `inter\:100,200,300,400,500,600,700,800,900`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-167457753-1",
      },
    },
  ],
};
