import React, { useState } from "react";

function Simpleform() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [like, setLike] = useState("");

  function getFormData(e) {
    console.log(name, like, tnc);
    e.preventDefault();
  }
  return (
    <div>
      <h1>Handle Simple Form in React js</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Type your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <select
          onChange={(e) => {
            setLike(e.target.value);
          }}
        >
          <option>Select Option</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <br />
        <input
          type="Checkbox"
          onChange={(e) => {
            setTnc(e.target.checked);
          }}
        />
        <span>Accept Terms and Condition</span>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Simpleform;
