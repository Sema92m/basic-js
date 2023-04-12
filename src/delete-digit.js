const { NotImplementedError } = require("../extensions/index.js");

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
function deleteDigit() {
 
}
deleteDigit();

module.exports = {
    deleteDigit,
};



// function a(n) {
//     const minNum = (+String(n).split("").sort((a, b) => a - b)[0]);
//     // console.log(minNum);
//     let result = [];
//     let c =    [] ;
//      +String(n).split("").reverse().forEach((element) => {
//       console.log(element);
//       console.log(typeof +element);
//               if (+element !== minNum || (+element === minNum && c.length === 1)) {
//                 result.push(element);
//                 console.log(1);
//                 }
//                 if (+element === minNum && c.length < 1) {
//                     c.push(element);
//                     console.log(2);
//                 }
                
                
//             });

//     return console.log([minNum, +result.reverse().join("")]);
// }
// a(342);
//342 dont work



// function deleteDigit(n) {
//  let arr = String(n).split("");
//  let res = [];
 
 
//  return console.log(res);
// }
// deleteDigit(222219);