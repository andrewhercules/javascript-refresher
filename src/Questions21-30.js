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

// Question 26

function roundDownNumber(number) {
  return Math.floor(number);
};

// Question 27

function formatDateNicely(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var currentMonth = months[date.getMonth()]
  return date.getDate()+ '-' +currentMonth+ '-' +date.getFullYear();
  };

// Question 28

function getDomainNameFromEmailAddress(email) {
  return email.split('@')[1].split('.')[0];
};

// Question 29

function titleizeString(string) {
  return string.toLowerCase().replace(/^.|\s\S/g, function(a) {
    return a.toUpperCase();
  });
};

// Question 30

function checkStringForSpecialCharacters(string) {
  if (string.match(/[^A-Za-z0-9\-]/)) {
    return true;
  } else {
    return false;
  };
};
