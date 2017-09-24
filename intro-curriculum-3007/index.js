'use strict';

/**
 * 17で割り切れる配列を返す
 * @param {array} numbers
 */
function isMultipleOfSeventeen(number) {
    // return numbers.filter(isSeventeen);
    // if (number % 17 === 0) {
    //     return true
    // } else {
    //     return false
    // }
    return number % 17 === 0 ? true : false;

    // correct anser
    // return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
