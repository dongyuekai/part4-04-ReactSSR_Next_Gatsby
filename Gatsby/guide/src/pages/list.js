import React from "react"
import Header from '../components/Header'
import { graphql } from 'gatsby'
import Seo from '../components/SEO'

export default function List({ data }) {
  console.log(data)
  return (
    <div>
      List page!
      <Seo title='list page' description='list page description' />
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
  )
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