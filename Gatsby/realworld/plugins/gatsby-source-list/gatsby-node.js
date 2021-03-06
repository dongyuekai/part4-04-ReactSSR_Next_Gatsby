const axios = require('axios')
const createNodeHelpers = require('gatsby-node-helpers').default
const { paginate } = require('gatsby-awesome-pagination')

exports.sourceNodes = async ({ actions }, { apiUrl }) => {
  const { createNode } = actions
  let articles = await loadArticles(apiUrl)
  // console.log('articles--', articles)
  const { createNodeFactory, generateNodeId } = createNodeHelpers({
    typePrefix: 'articles'
  })
  const createNodeObject = createNodeFactory('list', node => {
    node.id = generateNodeId('list', node.slug)
    return node
  })
  articles.forEach(article => {
    createNode(createNodeObject(article))
  })
}

// 获取数据
async function loadArticles(apiUrl) {
  let limit = 100
  let offset = 0
  let result = []
  await load()
  async function load() {
    let { data } = await axios.get(`${apiUrl}/articles`, {
      params: { limit, offset },
    })
    result.push(...data.articles)
    if (result.length < data.articlesCount) {
      offset += limit
      await load()
    }
  }
  return result
}
// 分页查询 构建list/xx 页面
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  let { data } = await graphql(`
     query {
       allArticlesList {
         nodes {
           slug
         }
       }
     }
  `)
  // 创建你的分页
  paginate({
    createPage, // The Gatsby `createPage` function
    items: data.allArticlesList.nodes, // An array of objects
    itemsPerPage: 10, // How many items you want per page
    pathPrefix: '/list', //Creates pages like `/blog`, `/blog/2`, etc
    component: require.resolve('../../src/templates/list.js') // 编程方式指定分页列表展示页面
  })
}