import React from "react";
import Info from "./Info";

function NestedComp() {
  const allusers = [
    { name: "Sagar", pin: 394120, email: "sk@g.com" },
    { name: "Giten", pin: 394129, email: "gk@g.com" },
    { name: "Miten", pin: 394125, email: "mi@g.com" },
  ];
  return (
    <div>
      <h1>Nested Component</h1>
      {/* {allusers.map((e, i) => (
        <h1 key={i}>
          {e.name}&nbsp;&nbsp;&nbsp;
          {e.email}&nbsp;&nbsp;&nbsp;
          {e.pin}
        </h1>
      ))} */}
      <h1>
        {allusers.map((e) => (
          <Info info={e} />
        ))}
      </h1>
    </div>
  );
}

export default NestedComp;
