import React, { useState } from 'react';

export function OptionsDropdown({countries}) {
    // const [countries, setCountries] = useState([]);

    return (
      <div>
        {countries.map((country,index)=>{return<div key={index}>{`${country}`}</div>})}
      </div>
    );
  }
  