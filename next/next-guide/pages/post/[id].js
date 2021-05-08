import { useRouter } from 'next/router'
// 这里的参数data是getStaticProps函数返回的
export default function Post({ data }) {
  console.log(data)
  const router = useRouter()
  if (router.isFallback) return <div>等待中...</div>
  return (
    <div>
      <span>{data.id}</span>
      <span>{data.title}</span>
    </div>
  )
}
// 返回用户可以访问到的所有路由参数
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
    fallback: true // false 表示未匹配到的页面显示404 eg: post/3   true表示展示等待页面 然后向下查找 比如post/3 不在paths范围 则向下在getStaticProps方法中匹配
  }
}
// 返回路由参数所对应的具体的数据
// 参数为getStaticPaths返回的值
export async function getStaticProps({ params }) {
  console.log('hello')
  const { id } = params
  let data
  switch (id) {
    case '1':
      data = { id: '1', title: 'Hello' }
      break;
    case '2':
      data = { id: '2', title: 'world' }
      break;
    case '3':
      data = { id: '3', title: 'hello world' }
      break;
    default:
      data = {}
  }
  return {
    props: {
      data
    }
  }
}