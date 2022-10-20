import React from "react";
import { Link } from "react-router-dom";

function SubRoute() {
  return (
    <div>
      <h1>SubRoute page</h1>
      <Link to="/Params/Anil">Anil</Link>
      <br></br>
      <Link to="/Params/Subhas">Subhas</Link>
    </div>
  );
}

export default SubRoute;
