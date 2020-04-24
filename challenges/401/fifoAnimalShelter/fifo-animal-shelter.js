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
    if( animal.toLowerCase() !== 'cat' && animal.toLowerCase() !== 'dog' ) {
      throw Error('Not a valid animal');
    }

    let animalNode = new Animal(animal);

    if (!this.front) {
      this.front = animalNode;
      this.rear = animalNode;
      return;
    } 

    this.rear.next = animalNode;
    this.rear = animalNode;
    return;
  }

  dequeue(pref) {
    if (!this.front) {
      throw Error('Shelter is empty, hurray!');
    }

    if( pref.toLowerCase() !== 'cat' && pref.toLowerCase() !== 'dog' ) {
      return null;
    }

    let prevAnimal = null;
    let currentAnimal = this.front;

    while(currentAnimal) {
      if (currentAnimal.species === pref.toLowerCase()) {
        if (!currentAnimal.next) {
          this.rear = prevAnimal;
          prevAnimal.next = null;
        }
        
        if (!prevAnimal) {
          this.front = currentAnimal.next;
        } else {
          prevAnimal.next = currentAnimal.next;
        }
        currentAnimal.next = null;
        
        return currentAnimal.species;
      }

      prevAnimal = currentAnimal;
      currentAnimal = currentAnimal.next;
    }

    let otherAnimal;

    if (pref.toLowerCase() === 'cat') otherAnimal = 'dog';
    else otherAnimal = 'cat';

    return `No animals are left in the shelter fitting your preference. Would you like a ${otherAnimal} instead?`;
  }
}


module.exports = AnimalShelter;