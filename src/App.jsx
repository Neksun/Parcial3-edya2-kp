import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TodoApp from './TodoApp';
import PokemonComponent from './PokemonComponent';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <TodoApp /> {/* Componente que usa el slice de "todos" */}
        
        <h1>Pokemon App</h1>
        <PokemonComponent /> {/* Componente que usa pokemonApi */}
      </div>
    </Provider>
  );
}

export default App;
