import React, { useState } from "react";

function Prev() {
  const [counter, setCounter] = useState(1);
  function updateCounter() {
    let random = Math.floor(Math.random() * 10);
    setCounter((prev) => {
      console.log(prev);
      return random;
    });
  }
  return (
    <div>
      <h1>Previous State in React</h1>
      <h2>{counter}</h2>
      <button onClick={updateCounter}>Click Me</button>
    </div>
  );
}
export default Prev;
