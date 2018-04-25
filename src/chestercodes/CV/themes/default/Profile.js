import React from 'react';
import { iconSize, isMobile, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorderAndPadding } from './styles/common'
import Icons from './icons'

export default function (props) {
  return (
    <Summary basics={props.basics} cvWidth={props.cvWidth} />
  );
}

var Summary = function (props) {
  var isMob = isMobile(props.cvWidth)
  var leftSide = isMob ? <h4>Profile</h4> : <Icons.ExperienceIcon size={iconSize} />
  var initialLeftStyle = isMob ? { borderLeft: "3px solid black" } : {}

  return (
    <div  >
      <div style={
        Object.assign(getLeftSideDivStyle(props.cvWidth), initialLeftStyle)}>
        {leftSide}
      </div>
      <div style={Object.assign(getRightSideDivStyle(props.cvWidth), mixWithBorderAndPadding({}))}>
        <p style={{
          margin: 10,
          textAlign: "justify",
        }} >{props.basics.summary}</p>
      </div>
    </div>
  )
}
