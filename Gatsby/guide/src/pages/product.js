import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Product({ data }) {
  console.log(data)
  return (
    data.allProductsJson.nodes.map(node => (
      (
        <div key={node.title}>
          <p>{node.title}</p>
          <p>{node.address}</p>
          <p>{node.price}</p>
          <div style={{ width: 400 }}>
            <Img fluid={node.url.childImageSharp.fluid} />
          </div>
        </div>
      )
    ))
  )
}
export const query = graphql`
  query  {
  allProductsJson {
    nodes {
      address
      price
      title
      url {
        childImageSharp {
          fluid {
            aspectRatio
            sizes
            src
            srcSet
          }
        }
      }
    }
  }
}
`