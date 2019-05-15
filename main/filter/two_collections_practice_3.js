'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(function (v) {
    return v % 2 === 0 || v % 3 === 0 || v % 5 === 0;
  });

  // return myArray1;
}

module.exports = choose_divisible_integer;
