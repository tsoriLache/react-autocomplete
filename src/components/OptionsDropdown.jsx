import React from 'react';
import { Option } from './Option';

export function OptionsDropdown({countries,handleClick}) {
    return (
      <div>
        {countries.map((country,index)=>{return<Option key={index} country={`${country}`} handleClick={()=>handleClick(country)}/>})}
      </div>
    );
  }
  