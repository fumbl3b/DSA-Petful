const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    let result = {};
    result.cat = pets.cats.show();
    result.dog = pets.dogs.show();
    if (!result.cat) {
      result.cat = {
        age: null,
        breed: null,
        description: null,
        gender: null,
        imageURL: null,
        name: 'All cats Adopted',
        story: 'Great Job!'
      };
    }
    if (!result.dog) {
      result.dog = {
        age: null,
        breed: null,
        description: null,
        gender: null,
        imageURL: null,
        name: 'All dogs Adopted',
        story: 'Great Job!'
      };
    }
    return result;
  },

  dequeue(type) {
    if (type === "cat") {
      pets.cats.dequeue();
    }
    if (type === "dog") {
      pets.dogs.dequeue();
    }
  },
};
