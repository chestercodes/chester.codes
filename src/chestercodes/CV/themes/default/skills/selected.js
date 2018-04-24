const selected = {
  HighlightedAndSelected: "HighlightedAndSelected",
  Highlighted: "Highlighted",
  Visible: "Visible",
  Hidden: "Hidden"
}

module.exports.selected = selected;

const types = {
  Skill: "Skill",
  SkillType: "SkillType",
  Setting: "Setting"
}

module.exports.selectedTypes = types;

module.exports.isSelectedFunc = function (stateType, stateValue, currentType, currentValue, skillsObj) {
  
  if(stateType === undefined || stateType === null 
    || stateValue === undefined || stateValue === null
    || !currentType || !currentValue){
    throw new Error("Bad input - '" + stateType + "' '" + stateValue + "' '" + currentType + "' '" + currentValue + "'")
  }

  var selectedIsBlank = function () {
    return selected.Visible
  }

  var selectedIsSkill = function () {
    if (currentType === types.Skill) {
      return currentValue === stateValue
        ? selected.HighlightedAndSelected
        : selected.Hidden
    }
    var skill = skillsObj.skills[stateValue];
    if (currentType === types.SkillType) {
      return skill.skillTypesIds.includes(currentValue)
        ? selected.Highlighted
        : selected.Hidden
    }
    if (currentType === types.Setting) {
      return skill.settingsIds.includes(currentValue)
        ? selected.Highlighted
        : selected.Visible
    }
    throw new Error("is bad type - " + currentType)
  }

  var selectedIsWork = function () {
    if (currentType === types.SkillType) {
      return selected.Hidden;
    }
    if (currentType === types.Setting) {
      if (currentValue === stateValue) {
        return selected.HighlightedAndSelected
      } else {
        return selected.Hidden;
      }
    }
    if (currentType === types.Skill) {
      var skill = skillsObj.skills[currentValue];
      return skill.settingsIds.includes(stateValue)
        ? selected.Highlighted
        : selected.Hidden;
    }
    throw new Error("is bad type - " + currentType)
    //return selected.Visible;
  }
  var selectedIsSkillType = function () {
    if (currentType === types.Setting) {
      return selected.Hidden;
    }
    if (currentType === types.SkillType) {
      if (currentValue === stateValue) {
        return selected.HighlightedAndSelected
      } else {
        return selected.Hidden;
      }
    }
    if (currentType === types.Skill) {
      var skill = skillsObj.skills[currentValue];
      return skill.skillTypesIds.includes(stateValue)
        ? selected.Highlighted
        : selected.Hidden;
    }
    throw new Error("is bad type - " + currentType)
    //return selected.Visible;
  }
  if (stateType === "" && stateValue === "") return selectedIsBlank();
  if (stateType === types.Skill) return selectedIsSkill();
  if (stateType === types.SkillType) return selectedIsSkillType();
  if (stateType === types.Setting) return selectedIsWork();

  return selected.Visible
}


module.exports.getSkillTypeStyle = function (s) {
  switch (s) {
      case selected.HighlightedAndSelected:
          return {
              padding: 5,
              margin: 5,
              border: "1px solid black"
          }
      case selected.Highlighted:
          return {
              //padding: 5,
              margin: 5,
              border: "1px solid black"
          }
      case selected.Visible:
          return {
              // padding: 5,
              // margin: 5,
              border: "1px solid black"
          }
      case selected.Hidden:
          return {
              // padding: 5,
              // margin: 5,
              // border: "1px solid black"
          }
      default:
          return {}
  }
}

module.exports.getSkillStyle = function (s) {
  switch (s) {
      case selected.HighlightedAndSelected:
          return {
              padding: 5,
              margin: 5,
              border: "1px solid black"
          }
      case selected.Highlighted:
          return {
              //padding: 5,
              margin: 5,
              border: "1px solid black"
          }
      case selected.Visible:
          return {
              // padding: 5,
              // margin: 5,
              border: "1px solid black"
          }
      case selected.Hidden:
          return {
              // padding: 5,
              // margin: 5,
              // border: "1px solid black"
          }
      default:
          return {}
  }
}

module.exports.getSettingStyle = function (s) {
  switch (s) {
      case selected.HighlightedAndSelected:
          return {
            backgroundColor: "green",  
            // padding: 5,
            //   margin: 5,
            //   border: "1px solid black"
          }
      case selected.Highlighted:
          return {
            backgroundColor: "yellow",  
            //padding: 5,
              // margin: 5,
              // border: "1px solid black"
          }
      case selected.Visible:
          return {
              // padding: 5,
              // margin: 5,
              border: "1px solid black"
          }
      case selected.Hidden:
          return {
              // padding: 5,
              // margin: 5,
              // border: "1px solid black"
          }
      default:
          return {}
  }
}
