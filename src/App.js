import './App.css';
import React, { useState } from 'react';
import { OptionsDropdown } from './components/OptionsDropdown';
import { SearchBar } from './components/SearchBar.jsx';
import countries from './data';

function App() {
  const [chosenCountry, setChosenCountry] = useState('');
  const handleClick = (country) => {
    setChosenCountry(country);
  };

  return (
    <div className="App">
      <SearchBar chosenCountry={chosenCountry} />
      <OptionsDropdown countries={countries} handleClick={handleClick} />
    </div>
  );
}

export default App;
