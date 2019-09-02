const axios = require('axios');
const fs = require('fs');
const pokemonDataParser = require('./pokemonDataParser');

const writeFile = '/data-from-api.csv';
const writeStream = fs.createWriteStream(__dirname + writeFile);

let pokemonNumber = 1;
let totalNumberOfPokemon = 151;
const promises = [];

while (pokemonNumber < totalNumberOfPokemon + 1) {
  promises.push(
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
  )
  pokemonNumber++;
}

writeStream.write(`"id", "name", "type1", "type2", "imageurl", "sprite", "stats" \n`);

Promise.all(promises)
  .then(values => {
    for (let i = 0; i < values.length; i++) {
      let pokemon = values[i];
      let row = pokemonDataParser(pokemon, i);
      console.log(row)
      writeStream.write(row + '\n')
    }
  })
  .catch(err => console.log(err))
