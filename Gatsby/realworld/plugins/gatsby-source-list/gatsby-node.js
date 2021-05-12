const axios = require('axios')
const createNodeHelpers = require('gatsby-node-helpers').default

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