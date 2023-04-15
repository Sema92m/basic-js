const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    if (!date) {
        return "Unable to determine the time of year!";
     } else if (!Date.parse(date) || !date.getUTCSeconds()) {
        throw new Error("Invalid date!");
    } else {
        let month = date.getMonth() + 1;

        if (month < 3 || month === 12) {
            return "winter";

        } else if (month >= 3 && month < 6) {
            return "spring";
        } else if (month >= 6 && month < 9) {
            return "summer";
        } else if (month > 8 && month < 12) {
            return "fall";
        }
    }
}
getSeason();

module.exports = {
    getSeason,
};

// npm run test ./test/what-season.test.js

// function getSeason(date) {
//   if (!date) {
//       return "Unable to determine the time of year!";
//   }
//   if (!Date.parse(date)) {
//       throw new Error("Invalid date!");
//   }
//   try {
//       date.getUTCSeconds();
//   } catch {
//       throw new Error("Invalid date!");
//   }

//   let month = date.getMonth() + 1;

//   if (month < 3 || month === 12) {
//       return "winter";
//   } else if (month >= 3 && month < 6) {
//       return "spring";
//   } else if (month >= 6 && month < 9) {
//       return "summer";
//   } else if (month > 8 && month < 12) {
//       return "fall";
//   }
// }
// getSeason();
