'use strict';

function map_to_even(collection) {
  return collection.map((x) => {
    return x + x;
  })
}

module.exports = map_to_even;
