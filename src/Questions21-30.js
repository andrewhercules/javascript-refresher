// Question 21

function swapKeysAndValuesInObject(object) {
  var result = {};
  for(var key in object) {
    result[object[key]] = parseInt(key);
  };
  return result;
};

// Question 22

function addKeysAndValues(object) {
  var result = 0;
  for(var key in object) {
    result += parseInt(key) + parseInt(object[key])
  };
  return result;
};
