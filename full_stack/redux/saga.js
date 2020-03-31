import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchPokemonSuccess, registerNewPokemonSuccess, unregisterPokemonSuccess } from './actions';
import axios from 'axios';

function* fetchPokemonData() {
  const fetchData = () => axios
    .get('/api')
    .then((res) => ({ res }))
    .catch((error) => ({ error }));
    
  const { res, error } = yield call(fetchData);
  if (res) {
    yield put(fetchPokemonSuccess({ pokemonList: res.data }))
  } else {
    console.log(error)
  }
}

// function* registerPokemon({ })

export function* saga() {
  yield takeEvery('FETCH_POKEMON', fetchPokemonData);
}