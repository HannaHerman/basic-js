const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let resArr = [];
  if(Array.isArray(arr)) {
    let counter = 0;
    while (counter < arr.length) {
      if (arr[counter] === '--discard-next') {
        if (arr[counter + 2] === "--double-prev" || arr[counter + 2] === "--discard-prev") {
          counter++;
        }
        counter += 2;
      } else if (arr[counter] === '--discard-prev') {
        if (counter !== 0) {
          resArr.pop();
          counter++;
        } else {
          counter++;
        }
      } else if (arr[counter] === '--double-next') {
        if ((counter + 1) === arr.length) {
          counter++;
        } else {
          resArr.push(arr[counter + 1]);
          counter++;
        };
      } else if (arr[counter] === '--double-prev') {
        if (counter === 0) {
          counter++;
        } else {
          resArr.push(arr[counter - 1]);
          counter++;
        };
      } else {
        resArr.push(arr[counter]);
        counter++;
      }
    }
    
  } else {
    throw new Error();
  }
  return resArr;
}
