const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    const next = {
      cat: pets.cats.show(),
      dog: pets.dogs.show()
    };
    return next;
  },
  getAll(type = null) {
    if(type) {
      if(type === 'dogs' || type === 'cats') {
        return pets[type].all();
      } else {
        throw new Error('Type error');
      }
    }
    const allPets = {
      cats: pets.cats.all(),
      dogs: pets.dogs.all()
    };
    return allPets;
  },
  dequeue(type) {
    // Remove a pet from the queue.
    if (type === 'dog' ) {
      pets.dogs.dequeue();
    }
    if (type === 'cat') {
      pets.cats.dequeue();
    }
  }
};
