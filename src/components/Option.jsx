
export function Option({country,handleClick}) {

    return (
      <button onClick={()=>handleClick()}>
        {country}
      </button>
    );
  }
  