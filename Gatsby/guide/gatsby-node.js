// 创建页面
function createPages({actions}){
  const { createPage } = actions
  // 获取模板的绝对路径
  const template = require.resolve("./src/templates/person.js")
  // 获取模板所需要的数据
  const persons = [
    {
      slug: "zhangsan",
      name: "张三",
      age: 20
    },
    {
      slug: "lisi",
      name: "李四",
      age: 23
    }
  ]
  // 根据模板和数据创建页面
  persons.forEach(person=>{
    createPage({
      // 模板绝对路径
      component: template,
      // 访问地址
      path: `/person/${person.slug}`,
      // 传递给模板的数据
      context: person
    })
  })
}
module.exports = {
  createPages
}