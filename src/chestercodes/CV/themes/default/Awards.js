import React from 'react';

export default function (props) {
  var toAward = function (award, i) {
    let key = award + i
    return (<p key={key}>{i}</p>);
  };

  return (
    <div>
      <h4>Awards</h4>
      {props.awards.map((x, i) => toAward(x, i))}
    </div>
  );
}

