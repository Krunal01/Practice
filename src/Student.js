import React from "react";
import PropTypes from "prop-types";

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

Student.propTypes = {
  name: PropTypes.string,
  rollno: PropTypes.number,
};

export default Student;
