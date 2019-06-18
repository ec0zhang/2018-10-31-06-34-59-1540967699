'use strict';

function double_to_one(collection) {
  //在这里写入代码
  return [].concat.apply([], collection);
  // apply的一个巧妙的用处,可以将一个数组默认的转换为一个参数列表([param1,param2,param3] 转换为 param1,param2,param3)
}

module.exports = double_to_one;
