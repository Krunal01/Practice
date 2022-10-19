import React, { useState } from "react";

function Imp() {
  return (
    <div>
      <h1>Main Function</h1>
      <HOC cmp={High} />
      <HOCgreen cmp={High} />
    </div>
  );
}

function HOC(props) {
  return (
    <h3 style={{ color: "red" }}>
      <props.cmp />
    </h3>
  );
}
function HOCgreen(props) {
  return (
    <h3 style={{ color: "green" }}>
      <props.cmp />
    </h3>
  );
}
function High() {
  const [btn, setBtn] = useState(0);
  return (
    <div>
      <h2>count : {btn}</h2>
      <button
        onClick={() => {
          setBtn(btn + 1);
        }}
      >
        Update Button
      </button>
    </div>
  );
}
export default Imp;
