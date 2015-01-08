// Question 31

function getUpperLimitOfRange(range) {
  return range[(range.length - 1)];
};

// Question 32

function squareRootOf(number) {
  return Math.sqrt(number);
};

// Question 33

function callMethodFromString(string) {
  var functionAsString = string +"()";
  return eval(functionAsString);
};

function sayHello() {
  return 'Hello!'
}

// Question 34

function isA2015BankHoliday(date) {
  holidays = ['1/1/2015', '3/4/2015', '6/4/2015', '4/5/2015', '25/5/2015', '31/08/2015', '25/12/2015', '28/12/2015']
  currentDate = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
  if(holidays.indexOf(currentDate) >= 0) {
    return true
  } else {
    return false;
  };
};

// Question 35

function convertToRomanNumerals(number) {
  var numberAsArray = number.toString().split('')
  var romanOnesPlaceValue = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
  var romanTensPlaceValue = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C']
  var romanHundredsPlaceValue = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M']

  if (number === 0) {
    return 'n/a'
  } else if (number <= 9) {
    return romanOnesPlaceValue[numberAsArray[0]];
  } else {
    return romanTensPlaceValue[numberAsArray[0]] + romanOnesPlaceValue[numberAsArray[1]];
  };
};
