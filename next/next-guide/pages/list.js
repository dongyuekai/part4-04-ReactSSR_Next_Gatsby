import Head from 'next/head'
import styles from '../styles/list.module.css'


export default () => {
  return (
    <>
      <Head>
        <title>list page</title>
      </Head>
      <div className={styles.demo}>list</div>
    </>
  )
}