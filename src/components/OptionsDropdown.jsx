import React, { useState } from 'react';
import { Option } from './Option';

export function OptionsDropdown({countries}) {
    // const [countries, setCountries] = useState([]);

    return (
      <div>
        {countries.map((country,index)=>{return<Option key={index} country={`${country}`}/>})}
      </div>
    );
  }
  