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

function reverseEveryElementInArray(array) {
  var result =[];
  for(var i=0; i < array.length; i++) {
    result.push(array[i].split('').reverse().join(''));
  };
  return result;
};

function dropFirstThreeElements(array) {
  array.splice(0, 3);
  return array;
};
