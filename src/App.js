import './App.css';
import { OptionsDropdown } from './components/OptionsDropdown';
import { SearchBar } from './components/SearchBar.jsx';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <OptionsDropdown countries={['A', 'B', 'C']} />
    </div>
  );
}

export default App;
