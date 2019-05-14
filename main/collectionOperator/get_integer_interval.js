'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var myArray = [];
  if (number_a === number_b) {
    myArray = [number_a]
  }
  else if (number_a > number_b) {
    for (let i = number_b; i <= number_a; i++) {
      myArray[i - 1] = i;
    }
    myArray.reverse();
  }
  else if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      myArray[i - 1] = i;
    }
  }

  return myArray;
}

module.exports = get_integer_interval;

