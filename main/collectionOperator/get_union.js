'use strict';

function get_union(collection_a, collection_b) {

  var myArray = collection_a.concat(collection_b.filter(function (v) {
    return !(collection_a.indexOf(v) > -1)
  }));
  // indexOf()  方法可以得到当前数字在数组中出现的位置， 只要这个值 > -1 就说明这个数字是有重复出现的，  这里给返回值！ 是为了使用filter
  // filter（）方法对数组 b 中的每一个值进行遍历，返回为 true 的值组成的数组，
  // concat 用来连接 a 数组和其中没有出现的 b 数组中的数字
  return myArray;
}

module.exports = get_union;

