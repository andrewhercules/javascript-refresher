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

// Question 23

function removeCapitalLettersFromString(string) {
  var words = string.split(' ');
  var tempArray = []
  for(i = 0; i < words.length; i++) {
    var noUpperCase = words[i].replace( /[A-Z]/g, '')
    tempArray.push(noUpperCase);
  };
  return tempArray.join(' ');
};

// Question 24

function everyPossiblePairing(arr) {
  return 'TO COMPLETE'
}

// Question 25

function roundUpNumber(number) {
  return Math.ceil(number);
};

// Question 25

function roundDownNumber(number) {
  return Math.floor(number);
};
