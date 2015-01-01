// Question 11

function separateArrayIntoEvenAndOddNumbers(array) {
  var result = []
  var evenArray = array.filter(isEven);
  var oddArray = array.filter(isOdd);
  result.push(evenArray, oddArray);
  return result
};

function isEven(element) {
  return element % 2 === 0;
};

function isOdd(element) {
  return element % 2 === 1;
};

// Question 12

function numberOfElementsThatArePalindromes(array) {
  var result = array.filter(isAPalindrome).length;
  return result
};

function isAPalindrome(element) {
  return element === element.split('').reverse().join('');
};

// Question 13

function shortestWordInArray(array) {
  array.sort(function(a, b) {
    return a.length - b.length;
    });
  return array[0];
};

// Question 14

function longestWordInArray(array) {
  array.sort(function(a, b) {
    return b.length - a.length;
  });
  return array[0];
};

// Question 15

function arrayTotal(array) {
  var result = array.reduce(function(a, b) {
    return a + b;
  });
  return result;
};

// Question 16

function doubleArray(array) {
  var result = array.concat(array);
  return result;
};

// Question 17

function averageOfArray(array) {
  var result = array.reduce(function(a, b) {
    return a + b;
  });
  return parseFloat((result / array.length).toFixed(1));
};

// Question 18

function removeElementsGreaterThanFive(array) {
  var result = array.filter(isLessThanFive);
  return result;
};

function isLessThanFive(element) {
  return element <= 5;
};

// Question 19

function convertArrayToObject(array) {
  var rv = {};
  for (var i = 0; i < array.length; i++)
    rv[i] = array[i];
    return rv;
};

// Question 20

function getLettersInArrayOfWords(array) {
  var tempArray = [];
  var result = [];
  for(i= 0; i < array.length; i++) {
    tempArray.push(array[i].split(''));
  };
  return (result.concat.apply(result, tempArray)).sort();
};
