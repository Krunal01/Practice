import React, { forwardRef } from "react";

function Childforwref(props, ref) {
  return (
    <div>
      <input type="text" ref={ref}></input>
    </div>
  );
}

export default forwardRef(Childforwref);
