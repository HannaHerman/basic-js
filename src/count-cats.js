const CustomError = require("../extensions/custom-error");


module.exports = function countCats(array) {
  let counter = 0;
  for (let el of array) {
    let smallArr = el;
    for (let i of smallArr) {
      if (i === '^^') {
        counter++;
      }
    }
  }
  return counter;
};
