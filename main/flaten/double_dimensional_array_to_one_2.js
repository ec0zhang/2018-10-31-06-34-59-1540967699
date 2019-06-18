'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = [].concat.apply([], collection);
  var temp = [];
  for (let i = 0; i <= result.length - 1; i++) {
    if (temp.indexOf(result[i]) === -1) {
      temp.push(result[i]);
    }
  }

  return temp;
}

module.exports = double_to_one;
