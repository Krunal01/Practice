// import React from "react";
// import PropTypes from "prop-types";

// function Student(props) {
//   return <h2>Special Props == {props.childern}</h2>;
// }
// function Student(props) {
//   return (
//     <React.Fragment>
//       <h2>
//         <div>{props.childern}</div>
//         <div>Student Name : {props.name}</div>
//         <div>Student Rollno : {props.rollno}</div>
//       </h2>
//     </React.Fragment>
//   );
// }

// Student.propTypes = {
//   name: PropTypes.string.isRequired,
//   rollno: PropTypes.number.isRequired,
// };

// Student.defaultProps = {
//   name: "like Mohan",
//   rollno: 100,
// };

// export default Student;

// import React, { Component } from "react";

// class Student extends Component {
//   state = {
//     name: "Rahul",
//     sub: this.props.subject,
//   };
//   render() {
//     return (
//       <h1>
//         Hello {this.state.name} and Subject is {this.state.sub}
//       </h1>
//     );
//   }
// }

import React from "react";

function Student(props) {
  function handleClick() {
    console.log("Button Clicked");
  }

  return (
    <div>
      <h1>Hello {props.name}</h1>
      <button onClick={handleClick}>CLick Me</button>
    </div>
  );
}
export default Student;
