import React from 'react';
import { rightSideDivStyle, leftSideDivStyle, mixWithBorderAndPadding, mixWithBorder2AndPadding } from '../styles/common'
import Experience from './Experience'

export default class WorkAndSkillsPrint extends React.Component {
  render() {
    return (
      <div>
        <Experience work={this.props.work} clickSelect={(t, v) => null} isSelected={(t, v) => null} selected={""} cvWidth={this.props.cvWidth} />
        <Skills skills={this.props.skills} skillsObj={this.props.skillsObj} />
        <hr/>
      </div>
    );
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div>
        <div style={leftSideDivStyle}>
          <h4>Skills</h4>
        </div>
        <div style={rightSideDivStyle}>
          <div style={mixWithBorderAndPadding({})} >{
            this.props.skills.map(x => <Skill key={x.name} skill={x} skillsObj={this.props.skillsObj} />)}
          </div>
        </div>
      </div>
    );
  }
}

class Skill extends React.Component {
  render() {
    return (
      <div>
        <p><b>{this.props.skill.name}</b> - {
          this.props.skill.keywords.map((x, i) => <Keyword key={x} keywordId={x}
            skillsObj={this.props.skillsObj}
            isFinal={i === (this.props.skill.keywords.length - 1)} />)}
        </p>
      </div>
    );
  }
}


class Keyword extends React.Component {
  render() {
    var selectId = "keyword:" + this.props.keywordId
    var keyWordName = this.props.skillsObj.skills[this.props.keywordId].name
    var commaOrBlank = this.props.isFinal ? "" : ","
    return (
      <span >{keyWordName + commaOrBlank} </span>
    );
  }
}
