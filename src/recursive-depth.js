const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 let depth = 0
class DepthCalculator {

  calculateDepth(arr) {
    let maxDepth = 0
    arr.forEach((el)=>{
      if(Array.isArray(el)){
        let currDepth = this.calculateDepth(el)
        if(currDepth > maxDepth){
          maxDepth = currDepth
        }
      }
    })
  return maxDepth + 1
  }}
module.exports = {
  DepthCalculator
};
