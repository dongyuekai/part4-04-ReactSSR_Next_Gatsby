import React from "react"
import { Link, graphql } from 'gatsby'
import SEO from '../components/SEO'

export default function Home({ data }) {
  console.log('dyk---', data)
  return (
    <>
      <SEO title='SEO Page' />
      <div>
        <Link to='/list'>jump to list</Link>
        <p>{data.site.siteMetadata.author}</p>
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
