import './App.css';
import { OptionsDropdown } from './components/OptionsDropdown';
import { SearchBar } from './components/SearchBar.jsx';
import countries from './data';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <OptionsDropdown countries={countries} />
    </div>
  );
}

export default App;
