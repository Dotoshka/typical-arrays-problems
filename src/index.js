
exports.min = function min(array) {
  let minValue = 0;
  if (array === undefined) return 0;
  if (array.length > 0) {
    for (i = 0; i < array.length; i++) {
      if (minValue > array[i]) {
        minValue = array[i];
      }
    }
    return minValue
  } else {
    return 0;
  }
}

exports.max = function max(array) {
  let maxValue = 0;
  if (array === undefined) return 0;
  if (array.length > 0) {
    for (i = 0; i < array.length; i++) {
      if (maxValue < array[i]) {
        maxValue = array[i];
      }
    }
    return maxValue
  } else {
    return 0;
  }
}

exports.avg = function avg(array) {
  if (array === undefined) return 0;
  if (array.length > 0) {
    return array.reduce((a, b) => a + b) / array.length;
  } else {
    return 0;
  }
}
