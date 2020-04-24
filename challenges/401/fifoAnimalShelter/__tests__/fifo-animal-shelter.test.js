'use strict';

let AnimalShelter = require('../fifo-animal-shelter.js');

describe('AnimalShelter methods', () => {
  it('can add an animal to the shelter', () => {
    let myShelter = new AnimalShelter();

    myShelter.enqueue('dog');

    expect(myShelter.front.species).toStrictEqual('dog');
  });

  it('can add multiple animals', () => {
    let myShelter = new AnimalShelter();

    myShelter.enqueue('dog');
    myShelter.enqueue('dog');
    myShelter.enqueue('cat');

    expect(myShelter.front.species).toStrictEqual('dog');
    expect(myShelter.front.next.species).toStrictEqual('dog');
    expect(myShelter.rear.species).toStrictEqual('cat');

  });

  it('throws an error when not adding cat or dog', () => {
    let myShelter = new AnimalShelter();

    expect(() => {
      myShelter.enqueue('mouse');
    }).toThrow();
  });

  it('can properly dequeue from the front of the list', () => {
    let myShelter = new AnimalShelter();
    
    myShelter.enqueue('dog');
    myShelter.enqueue('cat');
    myShelter.enqueue('dog');

    expect(myShelter.dequeue('dog')).toStrictEqual('dog');
    expect(myShelter.front.species).toStrictEqual('cat');
  });

  it('can properly dequeue from the middle of the list', () => {
    let myShelter = new AnimalShelter();
    
    myShelter.enqueue('dog');
    myShelter.enqueue('cat');
    myShelter.enqueue('dog');

    expect(myShelter.dequeue('cat')).toStrictEqual('cat');
    expect(myShelter.front.species).toStrictEqual('dog');
    expect(myShelter.rear.species).toStrictEqual('dog');

  });

  it('can properly dequeue from the end of the list', () => {
    let myShelter = new AnimalShelter();
    
    myShelter.enqueue('dog');
    myShelter.enqueue('dog');
    myShelter.enqueue('cat');

    expect(myShelter.dequeue('cat')).toStrictEqual('cat');
    expect(myShelter.front.species).toStrictEqual('dog');
    expect(myShelter.rear.species).toStrictEqual('dog');
  });

  it('returns null if dequeue preference is not defined as cat or dog', () => {
    let myShelter = new AnimalShelter();
    
    myShelter.enqueue('dog');
    myShelter.enqueue('cat');
    myShelter.enqueue('dog');

    expect(myShelter.dequeue('mouse')).toBe(null);
  });

  it('should throw an error if trying to dequeue an empty shelter', () => {
    let myShelter = new AnimalShelter();

    expect(() => {
      myShelter.dequeue('dog');
    }).toThrow();
  });
});