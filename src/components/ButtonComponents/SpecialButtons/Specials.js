import React, {useState} from "react";

//import any components needed

import SpecialButton from './SpecialButton.js'

//Import your array data to from the provided data file

import { specials } from '../../../data'

// console.log(specials)

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials)

  return (
    <div className="specials-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {/* {console.log(`Specials: ${specials}`)} */}
       {specials.map((special, key) => <SpecialButton special={special} key={key}/>)}
    </div>
  );
};

export default Specials