const axios = require('axios')
const pluralize = require('pluralize') // 转换成复数形式
const createNodeHelpers = require("gatsby-node-helpers").default


async function sourceNodes({ actions }, configOptions) {
  const { createNode } = actions
  const { apiUrl, contentTypes } = configOptions
  const types = contentTypes
    .map(type => type.toLowerCase())
    .map(type => pluralize(type))
  // console.log('dyk---types--', types) // [ 'posts', 'products' ]

  // 从外部数据源（cms）中获取数据
  let final = await getContents(types, apiUrl)
  // console.log('dyk-final--', final)

  for (let [key, value] of Object.entries(final)) {
    // 1 构建数据节点对象 allPostsContent allProductsContent
    const { createNodeFactory } = createNodeHelpers({
      typePrefix: key, 
    })
    const createNodeObject = createNodeFactory('content')
    // 2 根据数据节点对象创建节点 在localhost:8080/__graphql中能看到
    value.forEach(item => {
      createNode(createNodeObject(item))
    })
  }
}

async function getContents(types, apiUrl) {
  const size = types.length
  let index = 0
  const final = {}

  // 初始调用
  await loadContents()

  async function loadContents() {
    if (index === size) return
    let { data } = await axios.get(`${apiUrl}/${types[index]}`) // http://localhost:1337/posts 
    final[types[index++]] = data
    await loadContents()
  }

  return final
}

module.exports = {
  sourceNodes,
}