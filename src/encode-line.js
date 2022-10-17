const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result  = []
  let charCount = 1;
  for (let i = 0; i < str.length; i++){
    if (str[i] != str[i+1]){
      if(charCount > 1){
        result.push(charCount)
      }
      result.push(str[i])
       charCount = 1;
    }
    else{
      charCount +=1;
    }
  }
  return result.join('')
}

module.exports = {
  encodeLine
};
