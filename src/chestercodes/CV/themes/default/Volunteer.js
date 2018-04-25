import React from 'react';
import { iconSize, isMobile, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorder2AndPadding } from './styles/common'
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
        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <div>
            <span><b>{vol.organization}</b></span>
          </div>
          <div>
            <span>{formatDate(vol.startDate)}</span> - <span>{formatDate(vol.endDate)}</span>
          </div>
        </div>
        <p>{vol.summary}</p>

      </div>
    </div>);
  };

  var isMob = isMobile(props.cvWidth)
  var initialLeftStyle = isMob ? { borderRight: "3px solid black" } : {}
  var leftSide = isMob ? <h4>Volunteering</h4> : <Icons.TeamWork size={iconSize} />

  return (
    <div>
      <div style={
        Object.assign(getLeftSideDivStyle(props.cvWidth), initialLeftStyle)}>
        {leftSide}
      </div>
      <div style={Object.assign(mixWithBorder2AndPadding(getRightSideDivStyle(props.cvWidth)))}>
        {props.volunteer.map((x, i) => toVolunteer(x, i))}
      </div>
    </div>
  );
}

