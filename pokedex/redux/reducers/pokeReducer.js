const initialState = {
  pokemonList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON': {
      return state;
    }
    case 'FETCH_POKEMON_SUCCESS': {
      const { pokemonList } = action.payload;
      return {
        ...state,
        pokemonList,
      }
    }
    default: {
      return state;
    }
  }
}