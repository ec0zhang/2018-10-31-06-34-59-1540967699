'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  let myArray1 = collection_a.filter(function (v) {
    return collection_b.indexOf(v) === -1;
  });
  let myArray2 = collection_b.filter(function (v) {
    return collection_a.indexOf(v) === -1;
  });

  return myArray1.concat(myArray2);
}

module.exports = choose_no_common_elements;
