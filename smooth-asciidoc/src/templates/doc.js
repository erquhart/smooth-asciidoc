import { graphql } from 'gatsby'
import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

export const pageQuery = graphql`
  query DocPageQuery($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        pageType
        title
        editLink
      }
      body
      tableOfContents
    }
    asciidoc(id: { eq: $id }) {
      html
      fields {
        title
      }
    }
  }
`

export default function Page({ data: { asciidoc, mdx } }) {
  if (asciidoc) {
    return <div dangerouslySetInnerHTML={{ __html: asciidoc.html }}/>
  }
  return <MDXRenderer>{mdx.body}</MDXRenderer>
}
