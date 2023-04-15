const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n < 10) {
    return n;
}
return getSumOfDigits(
    String(n)
        .split("")
        .map((el) => Number(el))
        .reduce((acc, cur) => acc + cur, 0)
);
}
getSumOfDigits();

module.exports = {
    getSumOfDigits,
};

// const n = 123;
// function getSumOfDigits(n) {
//     if (n < 10) {
//         return n;
//     }
//     return getSumOfDigits(
//         String(n)
//             .split("")
//             .map((el) => Number(el))
//             .reduce((acc, cur) => acc + cur, 0)
//     );
// }

// console.log(getSumOfDigits(n));

// // // npm run test ./test/sum-digits.test.js
