const express = require('express');
const { people } = require('../../store');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('./../people/people.service')

const router = express.Router();

// router.get('/', json, (req, res) => {
//   // Return all pets currently up for adoption.
//   const { type } = req.body;
//   if (type === 'cats' || type === 'dogs') {
//     res.json(Pets.getAll(type));
//   } else {
//     res.json(Pets.getAll());
//   }
// });

router.get('/', (req, res) => {
  res.json(Pets.getAll());
})
  .get('/cats', json, (req, res) => {
    res.json(Pets.getAll('cats'));
  })
  .get('/dogs', json, (req, res) => {
    res.json(Pets.getAll('dogs'));
  });

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const { type } = req.body;
  try {
    Pets.dequeue(type);
    People.dequeue();
  } catch (e) {
    return res.status(400).json(e.message);
  }
  return res.status(202).end();
  //res.status(204).send(Pets.get());
});

module.exports = router;
