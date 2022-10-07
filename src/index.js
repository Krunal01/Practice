import React from "react";
import ReactDOM from "react-dom";
import Student from "./Student";
// import App from "./App";
// import Student from "./Student";

// ReactDOM.render(
//   <Student>
//     <p>I am Special Props</p>
//   </Student>,
//   document.getElementById("root")
// );
// ReactDOM.render(
//   <Student subject="Operating System" />,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Student name="Rahul" subject="OS" />,
  document.getElementById("root")
);
