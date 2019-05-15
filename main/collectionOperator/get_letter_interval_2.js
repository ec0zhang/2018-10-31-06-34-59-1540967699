'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var myArray = [];
  if (number_a <= number_b) {
    for (let i = number_a, j = 0; i <= number_b; i++, j++) {
      if (i > 26 && i < 53) {
        myArray[j] = 'a' + String.fromCharCode(parseInt(i) + 64 - 26).toLocaleLowerCase();
      } else if (i === 53) myArray[j] = 'b' + String.fromCharCode(parseInt(i) + 64 - 52).toLocaleLowerCase();
      else myArray[j] = String.fromCharCode(parseInt(i) + 64).toLocaleLowerCase();
    }
  }
  else {
    for (let i = number_b, j = 0; i <= number_a; i++, j++) {
      if (i > 26 && i < 53) {
        myArray[j] = 'a' + String.fromCharCode(parseInt(i) + 64 - 26).toLocaleLowerCase();
      } else if (i === 53) myArray[j] = 'b' + String.fromCharCode(parseInt(i) + 64 - 52).toLocaleLowerCase();
      else myArray[j] = String.fromCharCode(parseInt(i) + 64).toLocaleLowerCase();
    }
    myArray.reverse();
  }
    return myArray;

}

module.exports = get_letter_interval_2;

