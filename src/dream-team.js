const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(namesArray) {
  let resArr = [];
  if (Array.isArray(namesArray)) {
    for (let i=0; namesArray.length > i; i++) {
      if (typeof namesArray[i] === "string") {
        resArr.push((namesArray[i].trim())[0].toUpperCase());
      }
    }
    return resArr.sort().join('');
  } else {
    return false;
  }
};
