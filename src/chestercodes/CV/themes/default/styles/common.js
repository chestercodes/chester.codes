var iconSize = 50
var iconSizePad = 30
var leftRightDiff = 25

module.exports.iconSize = iconSize;

module.exports.getLeftSideDivStyle = cvWidth => {
  return {
    //width: "10%",
    //minWidth: iconSize + 30,
    width: iconSize + iconSizePad,
    display: "inline-block",
    textAlign: "center",
  }
}

module.exports.getRightSideDivStyle = cvWidth => {
  return {
    width: cvWidth - iconSize - iconSizePad - leftRightDiff,
    display: "inline-block",
    //marginRight: 5
  }
}

var mixWithBorder = style => {
  return Object.assign({
    borderLeft: "3px solid black",
    borderBottom: "1px solid black",
  }, style)
}
module.exports.mixWithBorder = mixWithBorder;

module.exports.mixWithBorderAndPadding = style => {
  var borderAndPadding = mixWithBorder({ padding: "2px 8px 8px 8px" })
  return Object.assign(borderAndPadding, style);
}

var mixWithBorder2 = style => {
  return Object.assign({
    borderRight: "3px solid black",
    borderBottom: "1px solid black",
  }, style)
}
module.exports.mixWithBorder2 = mixWithBorder2;

module.exports.mixWithBorder2AndPadding = style => {
  var borderAndPadding = mixWithBorder2({ padding: "2px 8px 8px 8px" })
  return Object.assign(borderAndPadding, style);
}


var mixWithBorder3 = style => {
  return Object.assign({
    borderRight: "3px solid black",
    borderTop: "1px solid black",
  }, style)
}
module.exports.mixWithBorder3 = mixWithBorder3;

module.exports.mixWithBorder3AndPadding = style => {
  var borderAndPadding = mixWithBorder3({ padding: "2px 8px 8px 8px" })
  return Object.assign(borderAndPadding, style);
}

