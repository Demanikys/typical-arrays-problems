
exports.min = function min(array) {
  var result = 0;
  var i = 0;
  if ((typeof (array) === 'object') && (array !== '')) {
    for (i; i < array.length; i++) {
      if (result > array[i]) {
        result = array[i];
      };
    };
  } else {
    result = 0;
  };
  return result;
};

exports.max = function max(array) {
  var result = 0;
  var i = 0;
  if ((typeof (array) === 'object') && (array !== '')) {
    for (i; i < array.length; i++) {
      if (result < array[i]) {
        result = array[i];
      };
    };
  } else {
    result = 0;
  };
  return result;
}

exports.avg = function avg(array) {
  var result = 0;
  var i = 0;
  if ((typeof (array) === 'object') && (array != '')) {
    for (i; i < array.length; i++) {
      result = result + array[i];
    }
    result = result / array.length;
  } else {
    result = 0;
  };
  return result;
}
