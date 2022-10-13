import React, { useEffect, useState } from "react";

function Spec(props) {
  //   const [data, setData] = useState(100);
  //   const [count, setCount] = useState(20);
  useEffect(() => {
    console.log("useEffect");
  }, [props.data]);
  return (
    <div>
      <h1>Specifically calling useEffect on props</h1>
      <h1>Count Props : {props.count}</h1>
      <h1>Data Props : {props.data}</h1>
    </div>
  );
}

export default Spec;
