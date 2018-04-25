import React from 'react';
import { rightSideDivStyle, leftSideDivStyle, mixWithBorder, mixWithBorderAndPadding, mixWithBorder2, mixWithBorder2AndPadding, mixWithBorder3, mixWithBorder3AndPadding } from './styles/common'

export default function (props) {
  return (
    <div style={{ maxWidth: props.cvWidth }}>
      {props.print && <Name basics={props.basics} />}
    </div>
  );
}

var Name = function (props) {
  return (
    <header style={{
      borderBottom: "1px solid black",
      //marginBottom: 20,
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div  >
        <h1 style={{ textAlign: "left" }} >{props.basics.name}</h1>
      </div>

      <div >
        <Profiles profiles={props.basics.profiles} />
      </div>
    </header>
  )
}


var Profiles = function (props) {
  var sTable = {
    textAlign: "right",
    float: "right"
  }

  var profile = function (prof) {
    return (
      <tr key={prof.network} >
        <td style={mixWithBorder({ padding: 5 })}>{prof.network}</td><td style={mixWithBorder({ padding: 5 })}>{prof.username}</td>
      </tr>
    )
  }

  var profilesForPrintedCv = props.profiles.filter(x => x.network !== "Twitter");

  return (
    <table style={sTable}>
      <tbody>
        {profilesForPrintedCv.map(x => profile(x))}
      </tbody>
    </table>

  )
}

