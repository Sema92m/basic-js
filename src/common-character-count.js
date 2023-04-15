const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
//  */
function getCommonCharacterCount(s1, s2) {
    let count = 0;
    if (
        !s1 ||
        !s2 ||
        typeof s1 !== "string" ||
        typeof s2 !== "string" ||
        s1.length === 0 ||
        s2.length === 0
    ) {
        return 0;
    }
    if (s1.length > s2.length ? s1.includes(s2) : s2.includes(s1)) {
        return Math.min(s1.length, s2.length);
    }
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            count++;
            s1 = s1.slice([i]);
        }
    }
    return count;
}
getCommonCharacterCount();

module.exports = {
    getCommonCharacterCount,
};

// function getCommonCharacterCount(s1, s2) {
//     let count = 0;
//     if (
//         !s1 ||
//         !s2 ||
//         typeof s1 !== "string" ||
//         typeof s2 !== "string" ||
//         s1.length === 0 ||
//         s2.length === 0
//     ) {
//         return 0;
//     }
//     if (s1.length > s2.length ? s1.includes(s2) : s2.includes(s1)) {
//      return  Math.min(s1.length,s2.length)
//     }
//     for (let i = 0; i < s1.length; i++) {
//         if (s2.includes(s1[i])) {
//             count++;
//             s1 = s1.slice([i]);

//         }
//     }
//     return count;
// }
// console.log(getCommonCharacterCount('zzzz', 'zzzzzzz'));

// npm run test ./test/common-character-count.test.js
// let str = 'aaaa';
// let str2 = 'aaaaa';
// console.log(Math.min(str.length,str2.length))

// console.log(str.length > str2.length ? str.includes(str2) : str2.includes(str))
