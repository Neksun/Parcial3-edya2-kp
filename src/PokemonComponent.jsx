import React, { useState } from 'react';
import { useGetPokemonByNameQuery } from './store/slice/pokemonApi';

function PokemonComponent() {
  const [pokemonName, setPokemonName] = useState('pikachu');
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName);

  return (
    <div>
      <h1>Consulta de Pokémon</h1>
      <input
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Nombre del Pokémon"
      />
      {isLoading && <p>Cargando...</p>}
      {error && <p>Error al cargar los datos</p>}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <img src={data.sprites.front_default} alt={data.name} />
        </div>
      )}
    </div>
  );
}

export default PokemonComponent;
