import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Projects = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  //const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Projects" />
      
      <div>
        <p>
          Projects page is coming soon...
        </p>
      </div>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
