import { pokemonApi } from '../../api/pokemonApi';
import { setPokemons, startLoading } from './store/slice/pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const response = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    const { results } = response.data;

    dispatch(setPokemons({
      pokemons: results,
      page: page + 1,
    }));
  };
};
