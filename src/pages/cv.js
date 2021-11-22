import React, { Component } from "react";
import CV from "../components/cv";
import Layout from "../components/layout"
import Seo from "../components/seo"

class CVPage extends Component {
  render() {
    const siteTitle = `cv`
    const location = "/cv"

    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="CV" />
        <CV />
      </Layout>
    );
  }
}

export default CVPage;
