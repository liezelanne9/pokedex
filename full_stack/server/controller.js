const pool = require('../database/models');

const controller = {
  get: (req, res) => {
    console.log('get')
    pool.query('SELECT * FROM pokemon;')
      .then(data => res.status(200).send(data.rows))
      .catch(err => res.status(404).send(err))
  },
  post: (req, res) => {
    res.status(201).send('Hello from POST');
  },
  delete: (req, res) => {
    res.status(202).send('Hello from DELETE');
  }
}

module.exports = controller;