import React, {useState} from "react";

//import any components needed

import OperatorButton from './OperatorButton.js'

//Import your array data to from the provided data file

import { operators } from '../../../data'
// console.log(operators)
// {CharacterData, value} = operators
const Operators = () => {
  // STEP 2 - add the imported data to state

  const [operatorsState, setOperatorsState] = useState(operators)
  return (
    <div className="operators-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {operatorsState.map((operator, key) => <OperatorButton operator={operator} key={key}/>)}
    </div>
  );
};

export default Operators
