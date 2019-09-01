const pool = require('../database/models');

const controller = {
  get: (req, res) => {
    pool.query('SELECT * FROM pokemon;')
      .then(data => res.status(200).send(data.rows))
      .catch(err => res.status(404).send(err))
  },
  
  post: (req, res) => {
    let { id, name, type1, type2, imageurl } = req.body;
    const insertText = `INSERT INTO 
    pokemon (id, name, type1, type2, imageurl) 
    VALUES ('${id}', '${name}', '${type1}', '${type2 ? type2 : ""}', '${imageurl ? imageurl : ""}'
    );`

    pool.query(insertText)
      .then(data => res.status(201).send(data))
      .catch(err => res.status(400).send(err))
  },
}

const controller_params = {
  getByPokemon: (req, res) => {
    // Determine if we are searching by id or by name
    const isNumber = (/\d/).test(req.params.pokemon);
    const column = isNumber ? "id" : "name";
    const operator = isNumber ? "=" : "ILIKE";
    const bar = isNumber ? "" : "%";

    const selectText = `SELECT * FROM pokemon 
    WHERE ${column} ${operator} '${req.params.pokemon}${bar}';`
    console.log(selectText)
    pool.query(selectText)
      .then(data => res.status(202).send(data.rows))
      .catch(err => res.status(404).send(err))
  },
  deleteById: (req, res) => {
    let { pokemon } = req.params;
    pool.query(`DELETE FROM pokemon WHERE id = ${pokemon}`)
      .then(data => res.status(202).send(data))
      .catch(err => res.status(404).send(err))
  }
}

module.exports = { controller, controller_params };