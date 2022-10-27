import React, { useState } from "react";
import Prophooks from "./Prophooks";

function Prev() {
  const [counter, setCounter] = useState(0);
  function updateCounter() {
    return setCounter(Math.floor(Math.random() * 10));
  }
  return (
    <div>
      <h1 style={{ color: "blue" }}>Previous Props in React</h1>
      <Prophooks count={counter} />
      <button onClick={updateCounter}>Click Me</button>
    </div>
  );
}

export default Prev;
