'use strict';

function choose_even(collection) {

  //在这里写入代码
  return collection.filter(function (i) {
    return i % 2 === 0;
  });
}

module.exports = choose_even;
