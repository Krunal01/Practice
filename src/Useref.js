import React, { useRef } from "react";

function Useref() {
  const useRefs = useRef(null);
  function btn() {
    console.log("calling");
    useRefs.current.focus();
  }
  return (
    <div>
      <h1>Useref</h1>
      <input type="text" ref={useRefs}></input>
      <button onClick={btn}>click here</button>
    </div>
  );
}

export default Useref;
