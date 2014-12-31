describe('JavaScript Refresher Questions', function() {

  it('1. selectElementsStartingWithE: return elements from an array starting with the letter E', function() {
    testArray = ['emma', 'maya', 'ethan', 'liam', 'elise', 'jackson', 'samaire', ];
    expect(selectElementsStartingWithE(testArray)).toEqual(['emma', 'ethan', 'elise']);
  });

  it('2. selectElementsStartingWithVowel: return elements from an array starting with a vowel', function() {
    testArray = ['open', 'closed', 'small', 'also', 'ice', 'even'];
    expect(selectElementsStartingWithVowel(testArray)).toEqual(['open', 'also', 'ice', 'even']);
  });

});
