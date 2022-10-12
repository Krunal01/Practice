import React from "react";

function Mem1(props) {
  return (
    <div>
      <h1>Mem1</h1>
      <button
        onClick={() => {
          props.data();
        }}
      >
        Call data function
      </button>
    </div>
  );
}

export default Mem1;
