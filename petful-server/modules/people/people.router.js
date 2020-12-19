const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  res.json(People.get());
  //res.send(People.get());
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const { person } = req.body;
  const result = People.enqueue(person);
  res.json(result);
});

router.delete('/', (req, res) => {
  const result = People.dequeue();

  res.json(result);
});

module.exports = router;
