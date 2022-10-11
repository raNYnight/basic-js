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
  if(!Array.isArray(arr)){
    throw new Error('"arr" parameter must be an instance of the Array!')
  }
  let result = [];
  for (let i = 0; i < arr.length; i++){
    result.push(arr[i])
    // 1)
    if(arr[i] == '--double-next'){
      result.splice(result.length-1,1)
      if(arr[i+1] ==! undefined){result.push(arr[i+1])}
    }
    // 2)
    if(arr[i] == '--double-prev'){
      result.splice(result.length-1,1)
      if(arr[i-1] ==! undefined){result.push(arr[i-1])}
       
    }
    // 3)
    if(arr[i] == '--discard-next'){
      result.splice(result.length-1,1)
      arr.splice(arr[i+1])
    }
    if(arr[i] == '--discard-prev'){
      result.splice(result.length-2,2)
    }
     
  }
  return result
}

module.exports = {
  transform
};
