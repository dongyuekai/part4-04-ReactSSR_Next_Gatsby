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
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'markdown',
        path: `${__dirname}/src/posts/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'markdown',
        path: `${__dirname}/xml/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-images']
      }
    },
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-xml',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiUrl: "http://localhost:1337",
    //     contentTypes: ["Post",],
    //   },
    // },

    // 自定义的数据源插件获取外部数据
    {
      resolve: 'gatsby-source-mystrapi',
      options: {
        apiUrl: 'http://localhost:1337',
        contentTypes: ['Post', 'Product']
      }
    },

  ],
}
