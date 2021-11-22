
export function SearchBar({chosenCountry}) {
    
  return (
    <>
      <input placeholder='select a country' value={chosenCountry} onChange={({target})=>console.log(target)}/>
      <button>X</button>
      <button>v</button>
    </>
  );
}
