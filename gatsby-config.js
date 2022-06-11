module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        basePath: '/',
        contentPath: `${__dirname}/content/`,
        rootNote: `/Garden`,
      },
    },
  ],
  siteMetadata: {
    title: `Digital Garden`,
  },
}
