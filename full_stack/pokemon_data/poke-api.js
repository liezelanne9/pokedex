const axios = require('axios');
const fs = require('fs');
const pokemonImageUrls = require('./pokemonImageUrls');

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

writeStream.write('id, name, type1, type2, imageurl, sprite, stats \n');

Promise.all(promises)
  .then(values => {
    for (let i = 0; i < values.length; i++) {
      let pokemon = values[i];

      // Parse out data we want
      let { id, name, types, sprites, stats } = pokemon.data;

      // Capitalize first letter of name
      name = name.charAt(0).toUpperCase() + name.slice(1);

      // Extract type1 and type2 from types array, then capitalize first letter
      types = types.reverse();
      let type1 = types[0].type.name;
      type1 = type1.charAt(0).toUpperCase() + type1.slice(1);

      let type2 = types[1] ? types[1].type.name : '';
      type2 = type2.charAt(0).toUpperCase() + type2.slice(1);

      // Extract imageurl from separate file
      let imageurl = pokemonImageUrls[i].imageUrl;
      let sprite = sprites.front_default;

      // Parse out stats array of nested objects into single stats object
      let statObj = {};
      stats = stats.forEach(stat => {
        let name = stat.stat.name;
        let value = stat.base_stat;
        statObj[name] = value;
      })
      stats = statObj;

      writeStream.write(`'${id}', '${name}', '${type1}', '${type2}', '${imageurl}', '${sprite}', '${JSON.stringify(stats)}'` + '\n')
    }
  })
  .catch(err => console.log(err))
