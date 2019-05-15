'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var myArray = [];
  if (number_a < number_b){
    for (let i = number_a, j = 0; i <= number_b ; i++,j++){
      myArray[j] = String.fromCharCode(parseInt(i) + 64).toLocaleLowerCase();
    }
  }
  else {
    for (let i = number_b, j = 0; i <= number_a ; i++,j++){
      myArray[j] = String.fromCharCode(parseInt(i) + 64).toLocaleLowerCase();
    }
    myArray.reverse();
  }
  return myArray;
}
// function min(a,b){
//   if (a >= b) return b;
//   else  return a;
// }
module.exports = get_letter_interval;
