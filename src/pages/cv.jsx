import React, { Component } from "react";
import Helmet from "react-helmet";
import CV from "../components/CV/CV";
import config from "../../data/SiteConfig";
import Card from "react-md/lib/Cards/Card";

class CVPage extends Component {
  render() {
    return (
      <div className="cv-container">
        <div className="md-grid md-grid--no-spacing md-cell--middle">
          <div className="md-grid md-cell--10 mobile-fix">
            <Card style={{width: "100%"}}>
              <CV />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default CVPage;
