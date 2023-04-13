const { NotImplementedError } = require("../extensions/index.js");

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
class DepthCalculator {
    calculateDepth(arr) {
        let d = 1;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                const nest = calculateDepth(arr[i]) + 1;
                d = Math.max(d, nest);
            }
        }
        return d;
    }
}

module.exports = {
    DepthCalculator,
};

//npm run test ./test/recursive-depth.teest.js

// let arr = [1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]];
// function calculateDepth1(arr) {
//     let d = 1;
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             const nest = calculateDepth1(arr[i]) + 1;
//             d = Math.max(d, nest);
//         }
//     }

//     return d;
// }
// console.log(calculateDepth1(arr));
