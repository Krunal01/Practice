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
import Member from "./Member";
import Mem1 from "./Mem1";
// import Profile from "./Profile";
// import Login from "./Login";
function App() {
  function getData() {
    alert("Hello ");
  }
  return (
    <div>
      {/* <h1>Conditional Rendering</h1> */}
      <Member data={getData} />
      <Mem1 data={getData} />
    </div>
  );
}

export default App;
