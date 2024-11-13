import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './slice/pokemonApi';
import todoReducer from './slice/todoSlice'; // Importa el reducer de los TODOs


export const store = configureStore({
  reducer: {
    todos: todoReducer, // Reducer para manejar los TODOs
    [pokemonApi.reducerPath]: pokemonApi.reducer, // Reducer para manejar la API de Pokémon
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware), // Middleware para RTK Query
});

