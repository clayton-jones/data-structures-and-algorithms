'use strict';

const Hashtable = require('./hashtable');

describe('Hashtable', () => {
  it('can add and retrive to/from table', () => {
    let Table = new Hashtable(1024);

    Table.add('super', 'duper');

    let retreived = Table.get('super'); 

    expect(retreived).toBe('duper');
  });

  it('returns null when key does not exist in table', () => {
    let Table = new Hashtable(1024);

    Table.add('super', 'duper');

    let retreived = Table.get('TEST'); 

    expect(retreived).toBe(null);

  });

  it('handles collision, and can retreive from that collided bucket', () => {
    let Table = new Hashtable(1024);

    Table.add('bat', 'BATMAN');
    Table.add('tab', 'TAB-MAN');


    expect(Table.get('bat')).toBe('BATMAN');
    expect(Table.get('tab')).toBe('TAB-MAN');

  });

  it('hashes key to an index within range of array', () => {
    let Table = new Hashtable(1024);

    let index = Table.hash('TEST');
    let indexTwo = Table.hash('TESTERMESTER');
    let indexThree = Table.hash('THELONGESTRUNONSENTENCEJK');

    expect(index < Table.size).toBeTruthy();
    expect(indexTwo < Table.size).toBeTruthy();
    expect(indexThree < Table.size).toBeTruthy();
  });

  it('determines existence of key in table', () => {
    let Table = new Hashtable(1024);

    Table.add('hello', 'world');

    expect(Table.contains('test')).toBeFalsy();
    expect(Table.contains('hello')).toBeTruthy();
  })
});

// Adding a key/value to your hashtable results in the value being in the data structure
// Retrieving based on a key returns the value stored
// Successfully returns null for a key that does not exist in the hashtable
// Successfully handle a collision within the hashtable
// Successfully retrieve a value from a bucket within the hashtable that has a collision
// Successfully hash a key to an in-range value