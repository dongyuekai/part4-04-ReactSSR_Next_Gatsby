const { parseString } = require('xml2js')
const { promisify } = require('util')
const parse = promisify(parseString)
const createNodeHelpers = require('gatsby-node-helpers').default

async function onCreateNode({ node, loadNodeContent, actions }) {
  const { createNode } = actions
  // 判断node是否是我们需要转换的节点
  if (node.internal.mediaType === 'application/xml') {
    let content = await loadNodeContent(node)

    // console.log('xml--', content)
    // parseString(
    //   content,
    //   { explicitArray: false, explicitRoot: false },
    //   (error, result) => {
    //     console.log('xml-result--', result) // { name: '张三', age: '20' }
    //   })

    // 通过promise方式拿结果 不通过回调函数
    let obj = await parse(content, { explicitArray: false, explicitRoot: false })
    const { createNodeFactory } = createNodeHelpers({
      typePrefix: 'XML'
    })
    const createNodeObject = createNodeFactory('parsedContent')
    createNode(createNodeObject(obj))
  }
}
module.exports = {
  onCreateNode
}