'use strict';

const multiBracketValidation = require('../multi-bracket-validation.js');

describe('happy path', () => {
  it('returns true when brackets are all balanced, short string', () => {
    let str = '{}';

    expect(multiBracketValidation(str)).toStrictEqual(true);
  });

  it('returns true when brackets are all balanced, long string', () => {
    let str = '()[[Extra Characters]]';

    expect(multiBracketValidation(str)).toStrictEqual(true);
  });
});

describe('edge cases', () => {
  it('returns false when string is only one character', () => {
    let str = '{';

    expect(multiBracketValidation(str)).toStrictEqual(false);
  });

  it('returns false when no string is given', () => {
    let str = '';

    expect(multiBracketValidation(str)).toStrictEqual(false);
  });

  it('throws error when input is not a string', () => {
    let input = 123;

    expect(() => { multiBracketValidation(input) }).toThrow();
  });

  it('returns false if first bracket is end bracket', () => {
    let str = '}{(';

    expect(multiBracketValidation(str)).toStrictEqual(false);
  });
});

describe('expected failures', () => {
  it('returns false when brackets don\'t match, short string', () => {
    let str = '[)';

    expect(multiBracketValidation(str)).toStrictEqual(false);
  });

  it('returns false when brackets don\'t match, long string', () => {
    let str = '[{([{iuytre}]}}}';

    expect(multiBracketValidation(str)).toStrictEqual(false);
  });
});