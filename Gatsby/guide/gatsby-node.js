const path = require('path')

// 以编程方式创建页面
// function createPages({ actions }) {
//   const { createPage } = actions
//   // 获取模板的绝对路径
//   const template = require.resolve("./src/templates/person.js")
//   // 获取模板所需要的数据
//   const persons = [
//     {
//       slug: "zhangsan",
//       name: "张三",
//       age: 20
//     },
//     {
//       slug: "lisi",
//       name: "李四",
//       age: 23
//     }
//   ]
//   // 根据模板和数据创建页面
//   persons.forEach(person => {
//     createPage({
//       // 模板绝对路径
//       component: template,
//       // 访问地址
//       path: `/person/${person.slug}`,
//       // 传递给模板的数据
//       context: person
//     })
//   })
// }

async function createPages({ graphql, actions }) {
  const { createPage } = actions
  // 1 获取模板的绝对路径
  const template = require.resolve('./src/templates/article.js')
  // 2 获取模板所需要的数据
  let { data } = await graphql(`
    query  {
      allMarkdownRemark {
        nodes {
         fields {
          slug
        }
      }
    }
  }
`)
  // 3 根据模板和数据创建页面
  data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      component: template,
      path: `/article/${node.fields.slug}`,
      context: {
        slug: node.fields.slug
      }
    })
  })
}

// 以编程方式为所有md数据节点添加slug属性
function onCreateNode({ node, actions }) {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}
module.exports = {
  createPages,
  onCreateNode
}