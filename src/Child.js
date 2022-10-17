import React from "react";
import Parent from "./Parent";

function Child() {
  function fromParent(data) {
    alert(data);
  }

  return (
    <div>
      <Parent alert={fromParent} />
    </div>
  );
}

export default Child;
