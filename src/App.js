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
// import React from "react";
// import Member from "./Member";
// import Mem1 from "./Mem1";
// // import Profile from "./Profile";
// // import Login from "./Login";
// function App() {
//   function getData() {
//     alert("Hello ");
//   }
//   return (
//     <div>
//       {/* <h1>Conditional Rendering</h1> */}
//       <Member data={getData} />
//       <Mem1 data={getData} />
//     </div>
//   );
// }

// export default App;
// import React, { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("calling another useEffect inside the hello function");
//   });
// function Hello() {
//   console.log("hello function calling inside useEffect");
//   useEffect(() => {
//     console.log("calling another 22222 useEffect inside the hello function");
//   });
// }
// Hello();

// Hello();
// useEffect(() => {
//   console.log("useEffect as a life cycle");
//CAN'T CALLED FUNCTION INSIDE THE HOOK
//   Hello();
// });
//   return (
//     <div>
//       <h1>App {count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Update Counter
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import Spec from "./Spec";
function App() {
  const [count, setCount] = useState(20);
  const [data, setData] = useState(100);
  // // useEffect(() => {
  // //   console.log("useEffect called by data");
  // // }, [data]);
  // // useEffect(() => {
  // //   alert("useEffect called by counter  " + count);
  // // }, [count]);
  return (
    <div>
      <Spec count={count} data={data} />
      {/* <h1>{count}</h1>
      <h1>{data}</h1> */}
      {/* <h1>{data}</h1> */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Counter
      </button>

      <button
        onClick={() => {
          setData(data - 1);
        }}
      >
        Update Data
      </button>
    </div>
  );
}

export default App;
