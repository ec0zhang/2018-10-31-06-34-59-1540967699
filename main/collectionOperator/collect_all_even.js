'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  // collection = [2, 1, 3, 4, 5];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 1) {
      collection.splice(i, 1);
      i--;//保证每一个数字都遍历到
    }
  }
  return collection;
  // collection.filter(collections => collections%2 === 0);
}

module.exports = collect_all_even;
