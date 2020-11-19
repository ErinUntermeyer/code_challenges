const anagrams = require('./index.js');

// DONE
describe.skip('Anagrams', () => {
  it('anagrams function exists', () => {
    expect(typeof anagrams).toEqual('function');
  });
  
  it('"hello" is an anagram of "llohe"', () => {
    expect(anagrams('hello', 'llohe')).toBeTruthy();
  });
  
  it('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
  });
  
  it('"One One" is not an anagram of "Two two two"', () => {
    expect(anagrams('One One', 'Two two two')).toBeFalsy();
  });
  
  it('"One one" is not an anagram of "One one c"', () => {
    expect(anagrams('One one', 'One one c')).toBeFalsy();
  });
  
  it('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
    expect(
      anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
    ).toBeFalsy();
  });
})

