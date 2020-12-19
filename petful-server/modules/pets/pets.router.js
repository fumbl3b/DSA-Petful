const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', json, (req, res) => {
  // Return all pets currently up for adoption.
  const { type } = req.body;
  if(type === 'cats' || type === 'dogs') {
    res.json(Pets.getAll(type));
  } else {
    res.json(Pets.getAll());
  }
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const { type } = req.body;
  Pets.dequeue(type);
  res.status(204).send(Pets.get());
});

module.exports = router;
