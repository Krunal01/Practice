import React, { useState } from "react";

function Stateobj() {
  const [data, setData] = useState({ name: "kuns", age: 20 });
  return (
    <React.Fragment>
      <h2 style={{ color: "yellow", backgroundColor: "green" }}>
        State Object with Hooks
      </h2>
      <input
        type="text"
        placeholder="enter name"
        value={data.name}
        onChange={(e) => {
          setData({ name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="enter age"
        value={data.age}
        onChange={(e) => {
          setData({ age: e.target.value });
        }}
      />
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
    </React.Fragment>
  );
}

export default Stateobj;
