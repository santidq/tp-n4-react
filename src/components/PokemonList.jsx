import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (index) => {
    const newPokemons = [...pokemons];
    newPokemons.splice(index, 1);
    setPokemons(newPokemons);
  };

  return (
    <ul>
      {pokemons.map((pokemon, index) => (
        <li key={pokemon.name}>
          {pokemon.name}{" "}
          <button onClick={() => handleDelete(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
