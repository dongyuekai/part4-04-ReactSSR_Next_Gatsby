/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      // 客户端路由
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/app/*'] }
    }
  ],
}
