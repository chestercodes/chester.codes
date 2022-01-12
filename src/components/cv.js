import React, { Component } from "react";
import { CV } from "../chestercodescv/index";
import resume from "../chestercodescv/resume.json"
import skills from "../chestercodescv/skills.json"

class CvWithData extends Component {
  render() {
    var theme = "default";
    var cvType = "default";
    var print = false;

    return (
      <CV
        jsonResume={resume}
        skills={skills}
        theme={theme}
        print={print}
        divId={this.props.divId}
        cvType={cvType}
        logoPrefix={this.props.logoPrefix}
      />
    );
  }
}

class CVPage extends Component {
  render() {
    var element = "cvElement"
    return (
      <div className="cv-container">
        <div style={{ maxWidth: 1200 }} className="">
          <div id={element} >
            <CvWithData divId={element} />
          </div>
        </div>
      </div>
    );
  }
}

export default CVPage;
