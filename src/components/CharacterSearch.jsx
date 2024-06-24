import React, { useState } from 'react';

const CharacterSearch = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSearch = () => {
    onSearch(name);
  };

  return (
    <div className="Procurar personagem">
      <input
        type="texto"
        value={name}
        onChange={handleInputChange}
        placeholder="Procure por um personagem..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CharacterSearch;
