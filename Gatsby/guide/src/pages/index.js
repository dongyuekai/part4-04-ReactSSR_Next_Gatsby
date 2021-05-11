import React from "react"
import { Link, graphql } from 'gatsby'
import Seo from '../components/Seo'
import { red } from "../styles/index.module.less"

export default function Home({ data }) {
  console.log('dyk---', data)
  return (
    <>
      <Seo title='SEO Page' />
      <div>
        <Link to='/list'>jump to list</Link>
        <p className={red}>{data.site.siteMetadata.author}</p>
        <p>{data.site.siteMetadata.title}</p>
      </div>
    </>
  )
}
export const query = graphql`
  query MyQuery {
  site {
    siteMetadata {
      author
      title
    }
  }
}
`
