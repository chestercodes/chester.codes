import React, { Component } from "react";
import CV from "../chestercodes/CV/component";
import "../chestercodes/CV/main.css";

class CVPage extends Component {
  render() {
    var element = "cvElement"
    return (
      <div className="cv-container">
        <div style={{ maxWidth: 1200 }} className="">
          <div id={element} >
            <CV divId={element} />
          </div>
        </div>
      </div>
    );
  }
}

export default CVPage;
