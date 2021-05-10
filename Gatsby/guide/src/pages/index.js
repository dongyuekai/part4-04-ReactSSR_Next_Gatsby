import React from "react"
import { Link, graphql } from 'gatsby'

export default function Home( {data} ) {
  console.log('dyk---',data)
  return (
    <div>
      <Link to='/list'>jump to list</Link>
      <p>{data.site.siteMetadata.author}</p>
      <p>{data.site.siteMetadata.title}</p>
    </div>
  )
}
export const query = graphql`
  query {
  site {
    siteMetadata {
      author
      title
    }
  }
}
`
