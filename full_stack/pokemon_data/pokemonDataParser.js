const pokemonImageUrls = require('./pokemonImageUrls');

const pokemonDataParser = (pokemon, i = null) => {
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
  let imageurl = pokemonImageUrls[i] ? pokemonImageUrls[i].imageUrl : '';
  let sprite = sprites.front_default;

  // Parse out stats array of nested objects into single stats object
  let statObj = {};
  stats = stats.forEach(stat => {
    let name = stat.stat.name;
    let value = stat.base_stat;
    statObj[name] = value;
  })
  statObj = JSON.stringify(statObj).replace(/"/g, "'");
  stats = statObj;

  return `"${id}", "${name}", "${type1}", "${type2}", "${imageurl}", "${sprite}", "${stats}"`;
}

module.exports = pokemonDataParser;