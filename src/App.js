// import React from "react";
// import Student from "./Student";

// function App() {
//   return (
//     <React.Fragment>
//       <Student>This is Speacial Props = props.childern</Student>
//       <Student name="Rahul" rollno={101} />
//       <Student name="Suhan" rollno={102} />
//       <Student name="Jemin" rollno={103} />
//     </React.Fragment>
//   );
// }

// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("Krunal");
//   const handleClick = () => {
//     setName("Rahul");
//   };
//   return (
//     <React.Fragment>
//       <h1>{name}</h1>
//       <button onClick={handleClick}>Change</button>
//     </React.Fragment>
//   );
// }

// export default App;
import React from "react";
import User from "./User";
import Guest from "./Guest";

function App(consumer) {
  const isReg = consumer;
  if (isReg) {
    return <User />;
  }
  return <Guest />;
}

export default App;
