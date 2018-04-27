import React, { Component } from "react";
import CV from "../../chestercodes/CV/component";
import "../../chestercodes/CV/main.css";
//import resume from "../../chestercodes/CV/resume.json";
//import skills from "../../chestercodes/CV/skills.json";
import "./CV.scss";

class CVElement extends Component {
  render() {
    //var theme = "default";
    var element = "cvElement"
    return (
      <div id={element} >
        <CV 
        //jsonResume={resume} skills={skills} theme={theme} print={true} 
        divId={element} />
      </div>
    );
  }
}

export default CVElement;
