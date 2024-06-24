import React, { useState } from 'react';
import CharacterSearch from './components/CharacterSearch.jsx';
import CharacterList from './components/CharacterList.jsx';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacters = (name) => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results || []);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div className="app">
      <h1>Pesquisar personagens do Rick and Morty</h1>
      <CharacterSearch onSearch={fetchCharacters} />
      {loading && <p>carregando...</p>}
      {error && <p>Error: {error.message}</p>}
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
