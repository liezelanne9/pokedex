const axios = require('axios');
const fs = require('fs');
const pokemonJSON = require('./pokemonJSON');

const writeFile = '/data-from-api.csv';
const writeStream = fs.createWriteStream(__dirname + writeFile);

let pokemonNumber = 1;
const promises = [];

while (pokemonNumber < 152) {
  // console.log(`Number: ${pokemonNumber}`)
  promises.push(
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
  )
  pokemonNumber++;
  // console.log(`promiseArray length: ${promises.length}`)
}

writeStream.write('id, name, type1, type2, imageurl, sprite, stats \n')

Promise.all(promises)
  .then(values => {
    for (let i = 0; i < values.length; i++) {
      let pokemon = values[i];

      let { id, name, types, sprites, stats } = pokemon.data;
      types = types.reverse();
      let type1 = types[0].type.name;
      let type2 = types[1] ? types[1].type.name : '';
      let imageurl = pokemonJSON[i].imageUrl;
      let sprite = sprites.front_default;
      stats = JSON.stringify(stats);

      writeStream.write(`"${id}", "${name}", "${type1}", "${type2}", "${imageurl}", "${sprite}", "${stats}"` + '\n')
    }
  })
