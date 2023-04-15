const { NotImplementedError } = require("../extensions/index.js");

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
// function repeater(/* str, options */) {

// }

module.exports = {
    repeater,
};
// npm run test ./test/extended-repeater.test.js

function repeater(str, options) {
    const repeatTimes = options.repeatTimes;
    const separator = options.separator;
    const addition = options.addition;
    const additionRepeatTimes = options.additionRepeatTimes;
    const additionSeparator = options.additionSeparator;

    if (!separator) {
        separator = "+";
    }
    if (!additionSeparator) {
        additionSeparator = "|";
    }
    if (!addition) {
        str = str + addition;
    }
}

repeater("TESTstr", {
    separator: "ds",
    addition: "ADD!",
    additionSeparator: ")))000",
});
//'TESTstrADD!'

// For example: repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
