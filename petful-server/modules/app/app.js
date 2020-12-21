const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(morgan('common'));
app.use(cors());
app.use(bodyParser.json({ strict: false }))

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/people', require('../people/people.router'));
app.use('/pets', require('../pets/pets.router'));

module.exports = app;
