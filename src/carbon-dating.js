const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" ||
      /^\s*$/.test(sampleActivity) || !isFinite(+sampleActivity) ||
      +sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY){
    return false;
  }
  let k = Math.log(2) / HALF_LIFE_PERIOD;
  let res = Math.round(Math.log(MODERN_ACTIVITY / +sampleActivity)) / k;
  return res;
};
