import React from "react";

const OperatorButton = (props) => {
  // console.log(props.operator.char)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.operator.char}</button>
    </>
  );
};

export default OperatorButton
