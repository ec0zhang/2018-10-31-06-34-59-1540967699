'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var myArray = [];
  for (let i = 0; i < collection_b.length; i++) {
    for (let j = 0; j < collection_a.length; j++){
      if (collection_b[i] === collection_a[j]){
        myArray.push(collection_b[i]);
        // console.log(collection_a[i]);
      }
    }
  }
  return myArray;
}

module.exports = get_intersection;
