describe('JavaScript Refresher Questions', function() {

  it('1. selectElementsStartingWithE: return elements from an array starting with the letter E', function() {
    testArray = ['emma', 'maya', 'ethan', 'liam', 'elise', 'jackson', 'samaire', ];
    expect(selectElementsStartingWithE(testArray)).toEqual(['emma', 'ethan', 'elise']);
  });

  it('2. selectElementsStartingWithVowel: return elements from an array starting with a vowel', function() {
    testArray = ['open', 'closed', 'small', 'also', 'ice', 'even'];
    expect(selectElementsStartingWithVowel(testArray)).toEqual(['open', 'also', 'ice', 'even']);
  });

  it('3. removeNullsFromArray', function() {
    testArray = [null, null, true, false, 1, null, 2, 'x', null];
    expect(removeNullsFromArray(testArray)).toEqual([true, false, 1, 2, 'x']);
  });

  it('4. removeNullsAndFalseFromArray', function() {
    testArray = [null, null, true, false, 1, null, 2, false, 'x', null];
    expect(removeNullsAndFalseFromArray(testArray)).toEqual([true, 1, 2, 'x']);
  });

  it('5. reverseEveryElementInArray', function() {
      testArray = ['coffee', 'tea', 'cake', 'brownie'];
      expect(reverseEveryElementInArray(testArray)).toEqual(['eeffoc', 'aet', 'ekac', 'einworb']);
  });

  it('6. dropFirstThreeElements', function() {
    testArray = [1,2,3,4,5,6]
    expect(dropFirstThreeElements(testArray)).toEqual([4,5,6]);
  });
  
});
