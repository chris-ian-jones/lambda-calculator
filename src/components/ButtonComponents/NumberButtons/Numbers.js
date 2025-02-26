import React, {useState} from "react";

//import any components needed

import NumberButton from './NumberButton.js'

//Import your array data to from the provided data file

import { numbers } from '../../../data'

// console.log(numbers)

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumbersState] = useState(numbers)
  
  return (
    <div className="numbers-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {/* {console.log(numbers)} */}
      {numbersState.map((key, number) => <NumberButton key={key} number={number}/>)}
    </div>
  );
};

export default Numbers
