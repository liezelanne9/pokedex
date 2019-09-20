const pool = require('../database/models');
const pokemonDataParser = require('../pokemon_data/pokemonDataParser');
const axios = require('axios');

const controller = {
  get: (req, res) => {
    pool.query('SELECT * FROM pokemon;')
      .then(data => {
        let datum = data.rows.map(row => {
          row.id = parseInt(row.id);
          row.name = row.name.trim();
          row.type1 = row.type1.trim();
          row.type2 = row.type2.trim();
          row.imageurl = row.imageurl.length ? row.imageurl.trim() : "https://cdn.bulbagarden.net/upload/thumb/a/a1/Substitute_artwork.png/200px-Substitute_artwork.png";
          row.sprite = row.sprite ? row.sprite.trim() : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
          row.stats = row.stats ? row.stats.trim() : "";
          row.stats = row.stats.length > 1 ? row.stats.substring(1, row.stats.length - 1).split(',') : ["10", "10", "10", "10", "10", "10"];
          row.stats = row.stats.map(stat => parseInt(stat))
          return row;
        })
        // console.log(datum[0]);
        res.status(200).send(datum);
      })
      // .then(data => res.status(200).send(data.rows))
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
    let { pokemon } = req.params;
    let isNumber = (/\d/).test(pokemon);
    let column = isNumber ? "id" : "name";
    pokemon = isNumber ? pokemon : pokemon.charAt(0).toUpperCase() + pokemon.slice(1);

    const selectText = `SELECT * FROM pokemon 
    WHERE ${column} = '${pokemon}';`
    console.log(selectText)
    pool.query(selectText)
      .then(data => res.status(202).send(data.rows))
      .catch(err => res.status(404).send(err))
  },
  deleteById: (req, res) => {
    let { pokemon } = req.params;
    const deleteText = `DELETE FROM pokemon WHERE id = '${pokemon}';`;
    console.log(deleteText)
    pool.query(deleteText)
      .then(data => res.status(202).send(data))
      .catch(err => res.status(404).send(err))
  },
  importFromPokeApi: (req, res) => {
    let { pokemon } = req.params;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((pokemon) => {
        let newPokemon = pokemonDataParser(pokemon);
        const insertText = `INSERT INTO 
        pokemon (id, name, type1, type2, imageurl, sprite, stats) 
        VALUES (${newPokemon.replace(/"/g, "'")});`

        console.log(insertText)
        pool.query(insertText)
          .then(data => res.status(201).send(data))
          .catch(err => res.status(400).send(err))
      })
      .catch(err => console.log(err.response))
  }
}

module.exports = { controller, controller_params };