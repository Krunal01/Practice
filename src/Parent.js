import React from "react";

function Parent(props) {
  const naam = "aman";
  return (
    <div>
      <button onClick={() => props.alert(naam)}>Click me</button>
    </div>
  );
}

export default Parent;
