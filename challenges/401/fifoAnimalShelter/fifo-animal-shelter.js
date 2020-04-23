'use strict';

// is this necessary or better to use a 'Dog' and 'Cat' class?
class Animal {
  constructor(species) {
    this.species = species.toLowerCase();
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  // is animal an object or a string used to make an object?
  enqueue(animal) {

    if( animal.species !== 'cat' || animal.species !== 'dog' ) return Error('Not a valid animal');

    if (this.isEmpty()) {
      this.front = animal;
      this.rear = animal;
      return;
    } 

    this.rear.next = animal;
    this.rear = animal;
    return;
  }

  dequeue(animal) {

  }
}