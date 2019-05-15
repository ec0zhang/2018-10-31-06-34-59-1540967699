'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  return uniq(collection);


}
function uniq(array){
  var temp = []; //一个新的临时数组
  for(var i = 0; i < array.length; i++){
    if(temp.indexOf(array[i]) === -1){
      temp.push(array[i]);
      // 在临时数组中检索 原数组 中的每一个数组 indexOf 返回值 -1 的时候说明当前数字在临时数组中不存在，则添加进去
    }
  }
  return temp;
}
module.exports = choose_no_repeat_number;
