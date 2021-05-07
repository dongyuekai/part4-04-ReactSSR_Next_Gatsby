import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>index page</title>
      </Head>
      <Link href='/list'><a>jump to list</a></Link>
      <img src='vercel.svg' />
    </>
  )
}
