import React, { useState } from "react";
import PokemonList from "./components/PokemonList";

const App = () => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Cargar Pokemons</button>
      {loading ? <PokemonList /> : null}
    </div>
  );
};

export default App;
