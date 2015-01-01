// Question 1

function selectElementsStartingWithE(array) {
  var result = [];
  for(var i = 0; i < array.length; i++) {
      if(array[i].charAt(0) === 'e') {
        result.push(array[i]);
      };
  };
  return result;
};

// Question 2

function selectElementsStartingWithVowel(array) {
  var result = [];
  for(var i = 0; i < array.length; i++) {
    if(array[i].charAt(0).match(/[aeiou]/)) {
      result.push(array[i]);
    };
  };
  return result;
};

// Question 3

function removeNullsFromArray(array) {
  var result = array.filter(isNotNull);
  return result
};

function isNotNull(element) {
  return element != null;
};

// Question 4

function removeNullsAndFalseFromArray(array) {
  var result = array.filter(isNotNull).filter(isNotFalse);
  return result;
};

function isNotFalse(element) {
  return element != false;
};

// Question 5

function reverseEveryElementInArray(array) {
  var result =[];
  for(var i=0; i < array.length; i++) {
    result.push(array[i].split('').reverse().join(''));
  };
  return result;
};

// Question 6

function dropFirstThreeElements(array) {
  array.splice(0, 3);
  return array;
};

// Question 7

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {
  array.sort(function(a, b) {
    var aLastLetter = a.charAt(a.length -1)
    var bLastLetter = b.charAt(b.length - 1);
    return aLastLetter < bLastLetter ? -1 : aLastLetter > bLastLetter ? 1 : 0;
  });
  return array;
};
