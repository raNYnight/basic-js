const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let copy = [...arr]
  for (let i = 0; i < arr.length; i++){
    if (copy[i] === '--discard-next' && i !== 0 && i != copy.length-1) {
      copy.splice(i, 2)
      break;
    }
    if (copy[i] === '--discard-prev' && i !== 0 && i != copy.length-1) {
      copy.splice(i-1, 2)
      break;
    }
    if (copy[i] === '--double-next' && i != copy.length-1) {
      copy[i] = copy[i+1]
    }
    if (copy[i] === '--double-prev' && i !== 0 && i != copy.length-1) {
      copy[i] = copy[i-1]
    }   
  }   
      return copy.filter(el => el !== '--discard-next' && el !== '--discard-prev' && el !== '--double-next' && el !== '--double-prev');
}

module.exports = {
  transform
};
