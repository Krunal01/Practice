import React from "react";
import Cs from "./Cs";

function Apps() {
  const data = Cs();
  const data1 = Cs();

  return (
    <React.Fragment>
      <h1>Custome {data.count}</h1>
      <button onClick={data.counterIncrement}>Increment</button>
      <h1>Custome {data1.count}</h1>
      <button onClick={data1.counterIncrement}>Increment</button>
    </React.Fragment>
  );
}

export default Apps;
