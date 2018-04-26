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

    if (stateType === undefined || stateType === null
        || stateValue === undefined || stateValue === null
        || !currentType || !currentValue) {
        throw new Error("Bad input - '" + stateType + "' '" + stateValue + "' '" + currentType + "' '" + currentValue + "'")
    }

    var getSettingId = function (settingName) {
        var settingVals = Object.values(skillsObj.settings)
        var settingWithName = settingVals.filter(s => s.name === settingName)
        if(settingWithName.length < 1){
            throw new Error("Bad setting name - " + settingName)
        }
        return settingWithName[0].id
    }

    var getSkillId = function (skillName) {
        var skillVals = Object.values(skillsObj.skills)
        var skillsWithName = skillVals.filter(s => s.name === skillName)
        if(skillsWithName.length < 1){
            throw new Error("Bad skill name - " + skillName)
        }
        return skillsWithName[0].id
    }
    
    var getSkillTypeId = function (skillTypeName) {
        var skillTypeVals = Object.values(skillsObj.skillTypes)
        var skillsTypesWithName = skillTypeVals.filter(s => s.name === skillTypeName)
        if(skillsTypesWithName.length < 1){
            throw new Error("Bad skill type name - " + skillTypeName)
        }
        return skillsTypesWithName[0].id
    }

    var selectedIsBlank = function () {
        return selected.Visible
    }

    var selectedIsSkill = function () {
        if (currentType === types.Skill) {
            if (currentValue === stateValue) {
                return selected.HighlightedAndSelected
            }
            else {
                return selected.Hidden
            }
        }
        var skill = skillsObj.skills[stateValue];
        if (currentType === types.SkillType) {
            var skillTypeId = getSkillTypeId(currentValue);
            if (skill.skillTypesIds.includes(skillTypeId)) {
                return selected.Highlighted
            }
            else {
                return selected.Hidden
            }
        }
        if (currentType === types.Setting) {
            var settingId = getSettingId(currentValue);
            if (skill.settingsIds.includes(settingId)) {
                return selected.Highlighted
            }
            else {
                return selected.Visible
            }
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
            var settingId = getSettingId(stateValue);
            if (skill.settingsIds.includes(settingId)) {
                return selected.Highlighted
            }
            else {
                return selected.Hidden;
            }
        }
        throw new Error("is bad type - " + currentType)
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
            var skillTypeId = getSkillTypeId(stateValue)
            if (skill.skillTypesIds.includes(skillTypeId)) {
                return selected.Highlighted;
            } else {
                return selected.Hidden
            }
        }
        throw new Error("is bad type - " + currentType)
    }
    if (stateType === "" && stateValue === "") return selectedIsBlank();
    if (stateType === types.Skill) return selectedIsSkill();
    if (stateType === types.SkillType) return selectedIsSkillType();
    if (stateType === types.Setting) return selectedIsWork();

    return selected.Visible
}


module.exports.getSkillClass = function (s) {
    switch (s) {
        case selected.HighlightedAndSelected:
            return "skill-to-s"
        case selected.Highlighted:
            return "skill-to-h"
        case selected.Visible:
            return "skill-to-v"
        case selected.Hidden:
            return "skill-to-i"
        default:
            throw new DOMException("Bad value, cant get class - " + s)
    }
}

module.exports.getSettingClass = function (s) {
    switch (s) {
        case selected.HighlightedAndSelected:
            return "setting-to-s"
        case selected.Highlighted:
            return "setting-to-h"
        case selected.Visible:
            return "setting-to-v"
        case selected.Hidden:
            return "setting-to-i"
        default:
            throw new DOMException("Bad value, cant get class - " + s)
    }
}

