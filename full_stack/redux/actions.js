export const fetchPokemon = () => ({
  type: 'FETCH_POKEMON',
  payload: {}
})

export const fetchPokemonSuccess = ({ pokemonList }) => ({
  type: 'FETCH_POKEMON_SUCCESS',
  payload: {
    pokemonList,
  }
})

export const unregisterPokemon = (pokemonId) => ({
  type: 'UNREGISTER_POKEMON',
  payload: {
    pokemonId,
  }
})

export const unregisterPokemonSuccess = (pokemonId) => ({
  type: 'UNREGISTER_POKEMON_SUCCESS',
  payload: {
    pokemonId,
  }
})

export const registerNewPokemon = (pokemonObject) => ({
  type: 'REGISTER_NEW_POKEMON',
  payload: {
    pokemonObject,
  }
})

export const registerNewPokemonSuccess = (pokemonObject) => ({
  type: 'REGISTER_NEW_POKEMON_SUCCESS',
  payload: {
    pokemonObject,
  }
})