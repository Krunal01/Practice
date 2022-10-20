import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Homes() {
  const navigate = useNavigate();
  const navigateTo = (url) => {
    navigate(url);
  };
  return (
    <div>
      <h1>Homes page</h1>
      <Link to="/">Go to Home page</Link>
      <br />
      <br />
      <button
        onClick={() => {
          navigateTo("/");
        }}
      >
        Go to About page
      </button>
      <button
        onClick={() => {
          navigateTo("/NestedRout");
        }}
      >
        Go to page NestedRout Page
      </button>
    </div>
  );
}

export default Homes;
