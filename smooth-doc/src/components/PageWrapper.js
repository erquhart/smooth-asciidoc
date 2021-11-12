import React from 'react'
import { PageLayout } from './PageLayout'
import { DocLayout } from './DocLayout'

export function PageWrapper({
  children,
  props: {
    data: { mdx, asciidoc },
  },
}) {
  // Assumes any asciidoc page is a docs page, will need to
  // be updated if non-docs pages also use asciidoc
  if (asciidoc) {
    return (
      <DocLayout title={asciidoc.fields.title}>
        {children}
      </DocLayout>
    )
  }

  if (!mdx?.fields?.pageType) return children
  switch (mdx.fields.pageType) {
    case 'doc':
      return (
        <DocLayout
          title={mdx.fields.title}
          tableOfContents={mdx.tableOfContents}
          editLink={mdx.fields.editLink}
        >
          {children}
        </DocLayout>
      )
    case 'page':
      return <PageLayout title={mdx.fields.title}>{children}</PageLayout>
    default:
      return children
  }
}
