import * as React from "react"
import { graphql } from "gatsby"

import ProjectsComponent from "../components/projects"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Projects = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  //const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Projects" />
      <ProjectsComponent />
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
