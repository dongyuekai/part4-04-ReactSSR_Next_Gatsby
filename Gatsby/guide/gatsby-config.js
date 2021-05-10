/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'hello gatsby',
    author: 'Join'
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'json',
        path: `${__dirname}/json/`
      }
    },
    {
      resolve: 'gatsby-transformer-json'
    }
  ],
}
