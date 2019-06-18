'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var myArray = [];
  if (number_a === number_b) {
<<<<<<< HEAD
    myArray = [number_a];
=======
    myArray = [number_a]
>>>>>>> f5339ed012c5ef8416231ba6da64677a9e6ed217
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

