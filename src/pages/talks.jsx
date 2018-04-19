import React, { Component } from "react";
import Helmet from "react-helmet";
import Talks from "../components/Talks/Talks";
import config from "../../data/SiteConfig";

class TalksPage extends Component {
  render() {
    return (
      <div className="talks-container">
        <Talks />
      </div>
    );
  }
}

export default TalksPage;
