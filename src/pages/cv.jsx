import React, { Component } from "react";
import Helmet from "react-helmet";
import CV from "../components/CV/CV";
import config from "../../data/SiteConfig";

class CVPage extends Component {
  render() {
    return (
      <div className="cv-container">
        <CV />
      </div>
    );
  }
}

export default CVPage;
