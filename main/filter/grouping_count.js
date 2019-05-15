'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === 1) count1++;
    else if (collection[i] === 2) count2++;
    else if (collection[i] === 3) count3++;
    else count4++;
  }
  var myObj = {'1': count1,
    '2':count2,
    '3':count3,
    '4':count4,
  }

  return myObj;
}

module.exports = grouping_count;
