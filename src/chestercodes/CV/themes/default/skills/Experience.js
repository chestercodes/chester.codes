import React from 'react';
import { getRightSideDivStyle, getLeftSideDivStyle, mixWithBorderAndPadding, mixWithBorder2AndPadding, iconSize } from '../styles/common'
import { isSelectedFunc, selectedTypes, getSettingStyle } from './selected'
import Icons from '../icons'

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
    this.isSelected = this.props.isSelected.bind(this);
  }

  render() {
    var rightStyle = getRightSideDivStyle(this.props.cvWidth)
    return (
      <div>
        <div style={getLeftSideDivStyle(this.props.cvWidth)}>
          <Icons.BriefCase size={iconSize} />
          {/* <h4>Experience</h4> */}
        </div>

        <div style={mixWithBorder2AndPadding(rightStyle)} >{
          this.props.work.map(x => <WorkPlace key={x.company} work={x}
            clickSelect={this.props.clickSelect}
            isSelected={this.isSelected} />)}

        </div>
      </div>
    );
  }
}

class WorkPlace extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
  }

  render() {
    var selected = this.props.isSelected(selectedTypes.Setting, this.props.work.company)
    var selectedStyle = getSettingStyle(selected);
    var s = Object.assign({  }, selectedStyle)
    return (
      <div style={{s}}>
        <div onClick={() => this.props.clickSelect(selectedTypes.Setting, this.props.work.company)}
          style={{
            padding: 10,
            borderLeft: "3px solid black",
            margin: 10
          }}
        >
          <WorkPlaceTitle work={this.props.work} />
          {this.props.work.summary != "" && <WorkPlaceDescription work={this.props.work} />}
          {this.props.work.highlights && this.props.work.highlights.length > 0 && <WorkPlaceHighlights work={this.props.work} />}

        </div>
      </div>
    );
  }
}

class WorkPlaceTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    function monthDiff(d1, d2) {
      var months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth();
      months += d2.getMonth();
      return months <= 0 ? 0 : months;
    }

    var formatDate = function (date) {
      var year = date.match(/20\d\d/)
      return year;
    }
    var startDateFormatted = formatDate(this.props.work.startDate);
    var endDateFormatted = this.props.work.endDate
      ? formatDate(this.props.work.endDate)
      : "Present";

    var diffInMonths = monthDiff(
      new Date(this.props.work.startDate),
      (this.props.work.endDate ? new Date(this.props.work.endDate) : new Date())
    )

    var diffInYears = 0;
    if (diffInMonths > 11) {
      diffInYears = Math.floor(diffInMonths / 12.0)
      diffInMonths -= diffInYears * 12
    }

    var formatDiff = function () {
      var years = diffInYears > 0 ? diffInYears + "y" : ""
      var months = diffInMonths > 0 ? diffInMonths + "m" : ""
      if (years !== "" && months !== "") {
        return years + ", " + months
      } else {
        return years + months
      }
    }

    var diff = formatDiff();
    return (
      <div>
        <div style={{
          minWidth: 300,
          width: "45%",
          display: "inline-block"
        }}>
          <span><b>{this.props.work.company}</b></span> - <span><i>{this.props.work.position}</i></span>
        </div>
        <div style={{
          minWidth: 150,
          width: "45%",
          display: "inline-block",
          textAlign: "right"
        }}>
          <span>{startDateFormatted}</span> - <span>{endDateFormatted}</span>
          <span><i>  ({diff})</i></span>
        </div>
      </div>
    )
  }
}

class WorkPlaceDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {<div style={{
          padding: 10,
          textAlign: "justify"
          // width: "45%",
          // display: "inline-block"
        }}>
          {this.props.work.summary}
        </div>}

      </div>
    )
  }
}

class WorkPlaceHighlights extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var toHighlight = function (h, i) {
      return <li key={i} ><div style={{
        padding: 3
      }} >{h}</div></li>
    }
    return (
      <div>
        {<div style={{
          padding: 10,
          textAlign: "justify"
          // width: "45%",
          // display: "inline-block"
        }}>
          {/* <p>Highlights:</p> */}
          <ul type="square" style={{
            marginTop: 0,
            marginBottom: 0
          }} >
            {this.props.work.highlights.map((x, i) => toHighlight(x, i))}
          </ul>
        </div>}

      </div>
    )
  }
}