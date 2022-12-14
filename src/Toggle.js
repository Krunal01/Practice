import React, { useState } from "react";

function Toggle() {
  const [status, setStatus] = useState(true);
  return (
    <div>
      {status ? <h1>Hello World</h1> : null}
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        Toggle
      </button>
      {/* <button
        onClick={() => {
          setStatus(true);
        }}
      >
        Show
      </button> */}
    </div>
  );
}

export default Toggle;
