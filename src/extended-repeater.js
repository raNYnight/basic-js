const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {

  let add = [];
  if(!options.separator){options.separator = '+'};
  if(!options.repeatTimes){options.repeatTimes = 1};
  if(!options.additionRepeatTimes){options.additionRepeatTimes = 1};
  if(!options.additionSeparator){options.additionSeparator = '|'};
  if(str === null){str = 'null';console.log('0')};
  if(options.addition === null){options.addition = 'null';console.log('0')}

  for (let i = 0; i < Number(options.additionRepeatTimes); i++){
   add.push(options.addition)
  } ;

  let strArr = [];
  for (let s = 0; s < Number(options.repeatTimes); s++ ){
    strArr.push(str + add.join(options.additionSeparator))
  }

 return strArr.join(options.separator)

}
module.exports = {
  repeater
};
