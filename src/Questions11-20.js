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
