import React from 'react';
import { iconSize, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorderAndPadding } from './styles/common'
import Icons from './icons'

export default function (props) {
  return (
    <Summary basics={props.basics} cvWidth={props.cvWidth}/>
  );
}

var Summary = function (props) {

  return (
    <div  >
      <div style={
        Object.assign(getLeftSideDivStyle(props.cvWidth), {})}>
        <Icons.ExperienceIcon size={iconSize} />
        {/* <h4>Profile</h4> */}
      </div>
      <div style={Object.assign(getRightSideDivStyle(props.cvWidth), mixWithBorderAndPadding({}))}>
        <p style={{
          //marginBottom: 0,
          textAlign: "justify",
        }} >{props.basics.summary}</p>
      </div>
    </div>
  )
}
