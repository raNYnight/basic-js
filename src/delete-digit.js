const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let Narr = n.toString().split('')
  let arr_count = []
  for (let i=0 ; i< Narr.length; i++){
    let arr = n.toString().split('')
    arr.splice(i,1)
    arr_count.push(Number(arr.join('')))
  }
  return arr_count.sort((a, b) =>b - a)[0]
}

module.exports = {
  deleteDigit
};
