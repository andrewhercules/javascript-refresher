function selectElementsStartingWithE(array) {
  var result = [];
  for(var i = 0; i < array.length; i++) {
      if(array[i].charAt(0) === 'e') {
        result.push(array[i]);
      };
  };
  return result;
};

function selectElementsStartingWithVowel(array) {
  var result = [];
  for(var i = 0; i < array.length; i++) {
    if(array[i].charAt(0).match(/[aeiou]/)) {
      result.push(array[i]);
    };
  };
  return result;
};

function removeNullsFromArray(array) {
  var result = array.filter(isNotNull);
  return result
};

function isNotNull(element) {
  return element != null;
};

function removeNullsAndFalseFromArray(array) {
  var result = array.filter(isNotNull).filter(isNotFalse);
  return result;
};

function isNotFalse(element) {
  return element != false;
};
