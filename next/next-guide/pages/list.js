import Head from 'next/head'
import styles from '../styles/list.module.css'
import { readFile } from 'fs'
import { promisify } from 'util'
import { join } from 'path'

const read = promisify(readFile)

export default ({ data }) => {
  return (
    <>
      <Head>
        <title>list page</title>
      </Head>
      <div className={styles.demo}>list</div>
      <div>{data}</div>
    </>
  )
}
// 静态生成
// getStaticProps会在构建的时候运行 在node环境下输出
// export async function getStaticProps() {
//   let data = await read(join(process.cwd(), 'pages', '_app.js'), 'utf-8')
//   console.log('dyk---data----', data)
//   return {
//     props: {
//       data
//     }
//   }
// }

// 服务器端渲染
// 每次客户端向服务端发送请求的时候都会执行
export async function getServerSideProps(context) {
  console.log('dyk--', context.query)
  let data = await read(join(process.cwd(), 'pages', '_app.js'), 'utf-8')
  console.log('dyk---hello----')
  return {
    props: {
      data
    }
  }
}