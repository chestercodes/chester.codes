import React, { Component } from 'react';
import PropTypes from "prop-types"
import { resumeType } from "./resumeType"
import Default from './themes/default'

class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvWidth: 100
    };
    this.handleResize = this.handleResize.bind(this);
    this.getCVWidth = this.getCVWidth.bind(this);
  }

  getCVWidth() {
    var maxWidth = 1200;
    var width = document.getElementById(this.props.divId).offsetWidth;
    return width > maxWidth ? maxWidth : width;
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({ cvWidth: this.getCVWidth() })
  }

  render() {

    return (
      <div style={{ margin: 15 }}>
        <Default jsonResume={this.props.jsonResume} skills={this.props.skills} print={this.props.print} cvWidth={this.state.cvWidth} />
      </div>
    );
  }
}

CV.propTypes = {
  jsonResume: resumeType.isRequired,
  divId: PropTypes.string,
  theme: PropTypes.string,
  skills: PropTypes.object,
  print: PropTypes.bool
}

export default CV;
