'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var myArray = [];
  if (number_a === number_b) {
    if (number_a % 2 === 0)  myArray = [number_a];
    // else myArray = [];
  }
  else if (number_a < number_b) {
    for (let i = number_a;i <= number_b ;i++){
      myArray[i - 1] = i;
    }
    for (let i = 0;i < myArray.length;i++){
      if (myArray[i] %2 === 1){
        myArray.splice(i,1);
      }
    }
  }
  else if (number_a > number_b){
    for (let i = number_b;i <= number_a ;i++){
      myArray[i - 1] = i;
    }
    for (let i = 0;i < myArray.length;i++){
      if (myArray[i] %2 === 1){
        myArray.splice(i,1);
      }
    }
    myArray.reverse();
  }

  return myArray;
}

module.exports = get_integer_interval_2;
