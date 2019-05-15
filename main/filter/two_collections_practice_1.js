'use strict';

function choose_common_elements(collection_a, collection_b) {

  // 在这里写入代码
  return collection_a.filter(function (v) {
    return collection_b.indexOf(v) > -1;
  })
  // -----------------------------------
  // 警示自己，不对
  // var temp = [];
  // for (let i=0;i<collection_a.length-1;i++){
  //
  //   if (collection_a[i].indexOf(collection_b) > -1){
  //     console.log('1');
  //     temp.push(collection_a[i]);
  //   }
  // }
  // return temp;

}

module.exports = choose_common_elements;
