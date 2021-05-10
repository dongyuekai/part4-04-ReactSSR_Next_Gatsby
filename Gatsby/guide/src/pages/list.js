import React from "react"
import Header from '../components/Header'
import { graphql } from 'gatsby'

export default function List({ data }) {
  console.log(data)
  return <div>List page!
     <Header />
    <hr />
    {
      data.allMarkdownRemark.nodes.map(post => (
        <div key={post.id}>
          <p>{post.frontmatter.title}</p>
          <p>{post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </div>
      ))
    }
  </div>
}
export const query = graphql`
   query  {
    allMarkdownRemark {
    nodes {
      id
      frontmatter {
        date
        title
      }
      html
      fileAbsolutePath
    }
  }
}
`