import React from "react";
import { useParams } from "react-router-dom";

function Params() {
  const para = useParams();
  const { name } = para;
  console.log(name);
  return (
    <div>
      <h1>This is {name}'s site</h1>
    </div>
  );
}
export default Params;
