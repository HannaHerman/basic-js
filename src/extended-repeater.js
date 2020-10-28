const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resStr = str;
  let addStr;

  if (options.additionRepeatTimes) {
    addStr = (options.addition + (options.additionSeparator || '|')).repeat(options.additionRepeatTimes - 1) + options.addition;
  }
  else {
    addStr = options.addition || '';
  }
  if (options.repeatTimes) {
    resStr = ((resStr + addStr) + (options.separator || '+')).repeat(options.repeatTimes - 1) + (resStr + addStr);
  }
  else {
    resStr += addStr;
  }
  return resStr;
};
  