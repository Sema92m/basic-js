const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!members || typeof members !== "object" || members.length < 1) {
    return false
  }
  let strTrimArr = [];
  for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
          strTrimArr.push(members[i].trim().toUpperCase());
      }
  }
  let res = [];
  for (let i = 0; i < strTrimArr.length; i++) {
      res.push(strTrimArr[i][0]);
  }
  return res.sort().join("");
}

createDreamTeam();

module.exports = {
    createDreamTeam,
};



// let members = [
//   'Amelia',
//   'Grace',
//   'Lily',
//   'Ruby',
// ];

// function createDreamTeam(members) {
//   console.log(typeof members);
//   if(!members || typeof members !== "object" || members.length < 1) {
//     return false
//   }
//   let strTrimArr = [];
//   for (let i = 0; i < members.length; i++) {
//       if (typeof members[i] === "string") {
//           strTrimArr.push(members[i].trim().toUpperCase());
//       }
//   }
//   let res = [];
//   for (let i = 0; i < strTrimArr.length; i++) {
//       res.push(strTrimArr[i][0]);
//   }
//   return console.log(res.sort().join(""));;
// }

// createDreamTeam(members);
// // npm run test ./test/dream-team.test.js
