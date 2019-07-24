module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
    resolve: `gatsby-source-contentstack`,
      options: {
        api_key: `blt23ca1580fadce274`,
        access_token: `bltc998c1d9b77d5fea`,
        environment: `development`
      },
    }
  ],
}