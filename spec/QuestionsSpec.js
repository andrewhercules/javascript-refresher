describe('JavaScript Refresher Questions', function() {

  it('1. selectElementsStartingWithE: return elements from an array starting with the letter E', function() {
    testArray = ['emma', 'maya', 'ethan', 'liam', 'elise', 'jackson', 'samaire', ];
    expect(selectElementsStartingWithE(testArray)).toEqual(['emma', 'ethan', 'elise']);
  });

  it('2. selectElementsStartingWithVowel: return elements from an array starting with a vowel', function() {
    testArray = ['open', 'closed', 'small', 'also', 'ice', 'even'];
    expect(selectElementsStartingWithVowel(testArray)).toEqual(['open', 'also', 'ice', 'even']);
  });

  it('3. removeNullsFromArray: remove null elements and return array', function() {
    testArray = [null, null, true, false, 1, null, 2, 'x', null];
    expect(removeNullsFromArray(testArray)).toEqual([true, false, 1, 2, 'x']);
  });

  it('4. removeNullsAndFalseFromArray: remove null and false elements and return array', function() {
    testArray = [null, null, true, false, 1, null, 2, false, 'x', null];
    expect(removeNullsAndFalseFromArray(testArray)).toEqual([true, 1, 2, 'x']);
  });

  it('5. reverseEveryElementInArray: return array with each individual string element reversed', function() {
      testArray = ['coffee', 'tea', 'cake', 'brownie'];
      expect(reverseEveryElementInArray(testArray)).toEqual(['eeffoc', 'aet', 'ekac', 'einworb']);
  });

  it('6. dropFirstThreeElements: return array with first three elements removed', function() {
    testArray = [1,2,3,4,5,6]
    expect(dropFirstThreeElements(testArray)).toEqual([4,5,6]);
  });

  it('7. addElementToBeginningOfArray: add element to beginning of an array', function() {
      testArray = [1,2,3];
      newElement = 'a';
      expect(addElementToBeginningOfArray(testArray, newElement)).toEqual(['a',1,2,3]);
  });

  it('8. sortArrayByLastLetterOfEachWord: return array sorted by last letter of each string element', function() {
    testArray = ['oatmeal', 'coffee', 'toast', 'tea'];
    expect(sortArrayByLastLetterOfEachWord(testArray)).toEqual(['tea', 'coffee', 'oatmeal', 'toast'])
  });

  it('9. returnFirstHalfOfString: return first half of a string', function() {
      expect(returnFirstHalfOfString('coffee')).toEqual('cof');
      expect(returnFirstHalfOfString('water')).toEqual('wat');
  });

  it('10. makeNumberNegative: convert positive (or negative) number to a negative number', function() {
    expect(makeNumberNegative(5)).toEqual(-5);
    expect(makeNumberNegative(-3)).toEqual(-3);
  });

});
