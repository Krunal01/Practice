import React from "react";

function Student(props) {
  return (
    <React.Fragment>
      <h2>
        <div>Student Name : {props.name}</div>
        <div>Student Rollno : {props.rollno}</div>
      </h2>
    </React.Fragment>
  );
}

export default Student;
