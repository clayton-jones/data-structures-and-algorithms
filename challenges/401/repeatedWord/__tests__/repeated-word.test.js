'use strict';

const repeatedWord = require('../repeated-word');

describe('repeated-word tests', () => {
  it('returns first repeated word in a string: test 1', () => {
    let str = 'I walk and talk like a field hand. But the boots I\'m wearing cost three grand. I write songs about riding tractors. From the comfort of a private jet';

    expect(repeatedWord(str)).toBe('i');
  });

  it('returns first repeated word in a string: test 2', () => {
    let str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

    expect(repeatedWord(str)).toBe('it');
  });

  it('returns first repeated word in a string: test 3', () => {
    let str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

    expect(repeatedWord(str)).toBe('summer');
  });

  it('returns null when given an empty string', () => {
    let str = '';

    expect(repeatedWord(str)).toBe(null);
  });

  it('returns an null when given an non string parameter', () => {
    let str = 1;

    expect(repeatedWord(str)).toBe(null);
  });

  it('returns null when given a string of all unique words', () => {
    let str = 'I am a string that contains unique words';

    expect(repeatedWord(str)).toBe(null);
  })
});