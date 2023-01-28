import React from "react";
import { useState } from "react";

const App = () => {
  // Wrong Code
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const increaseTimeout = () => {
    setTimeout(() => {
      setNumber(number + 1);
    }, 2000);
  };

  // Correct Code
  /* const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber((prev) => prev + 1);
  };
  const increaseTimeout = () => {
    setTimeout(() => {
      setNumber((prev) => prev + 1);
    }, 2000);
  }; */

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={increaseTimeout}>Increase After Timeout</button>
      <h1>Result : {number}</h1>
    </div>
  );
};

export default App;
