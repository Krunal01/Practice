import React, { useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [countstart, setCountStart] = useState(10);

  const multic = useMemo(
    function multi() {
      console.log("calling");
      return countstart;
    },
    [countstart]
  );

  return (
    <div>
      <h1>useMemo</h1>
      <h3>count : {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count by 1
      </button>
      <h3>count : {countstart}</h3>
      <h2>{multic}</h2>
      <button
        onClick={() => {
          setCountStart(countstart * 2);
        }}
      >
        Update Count by 10
      </button>
    </div>
  );
}

export default Memo;
