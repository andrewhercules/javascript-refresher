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
