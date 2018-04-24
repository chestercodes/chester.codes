import React from 'react';
import { iconSize, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorderAndPadding } from './styles/common'
import Icons from './icons'

export default function (props) {
  var toEducation = function (edu, i) {
    let key = edu.institution + i
    var formatDate = function (date) {
      var year = date.match(/20\d\d/)
      return year;
    }
    return (<div key={key}>
      <div style={{
        padding: 10,
        borderRight: "3px solid black",
        margin: 10
      }}
      >
        <div>
          <div style={{
            //minWidth: 300,
            width: "45%",
            display: "inline-block"
          }}>
            <span><b>{edu.institution}</b></span>
          </div>
          <div style={{
            //minWidth: 150,
            width: "45%",
            display: "inline-block",
            textAlign: "right"
          }}>
            <span>{formatDate(edu.startDate)}</span> - <span>{formatDate(edu.endDate)}</span>
          </div>
        </div>
        <p>{edu.studyType} - <b>{edu.gpa}</b></p>

      </div>
    </div>);
  };

  return (

    <div>
      <div style={
        Object.assign(getLeftSideDivStyle(props.cvWidth), {})}>
        <Icons.Education size={iconSize} />
        {/* <h4>Profile</h4> */}
      </div>
      <div style={Object.assign(mixWithBorderAndPadding(getRightSideDivStyle(props.cvWidth)))}>
        {props.education.map((x, i) => toEducation(x, i))}
      </div>
    </div>
  );
}

