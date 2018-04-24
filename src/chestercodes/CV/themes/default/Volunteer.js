import React from 'react';
import { iconSize, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorder2AndPadding } from './styles/common'
import Icons from './icons'

export default function (props) {
  var toVolunteer = function (vol, i) {
    let key = vol.organization + i
    var formatDate = function (date) {
      var year = date.match(/20\d\d/)
      return year;
    }
    return (<div key={key}>
      <div style={{
        padding: 10,
        borderLeft: "3px solid black",
        margin: 10
      }}
      >
        <div>
          <div style={{
            //minWidth: 300,
            width: "45%",
            display: "inline-block"
          }}>
            <span><b>{vol.organization}</b></span>
          </div>
          <div style={{
            //minWidth: 150,
            width: "45%",
            display: "inline-block",
            textAlign: "right"
          }}>
            <span>{formatDate(vol.startDate)}</span> - <span>{formatDate(vol.endDate)}</span>
          </div>
        </div>
        <p>{vol.summary}</p>

      </div>
    </div>);
  };

  return (
    <div>
      <div style={
        Object.assign(getLeftSideDivStyle(props.cvWidth), {})}>
        <Icons.TeamWork size={iconSize} />
        {/* <h4>Profile</h4> */}
      </div>
      <div style={Object.assign(mixWithBorder2AndPadding(getRightSideDivStyle(props.cvWidth)))}>
        {props.volunteer.map((x, i) => toVolunteer(x, i))}
      </div>
    </div>
  );
}

