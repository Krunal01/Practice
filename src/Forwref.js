import React, { useRef } from "react";
import Childforwref from "./Childforwref";
function Forwref() {
  const Ref = useRef(null);
  function updateVal() {
    Ref.current.value = "Krunal";
  }
  return (
    <div>
      <h1>Forward Reference</h1>
      <Childforwref ref={Ref} />
      <button onClick={updateVal}>Update Input Box</button>
    </div>
  );
}

export default Forwref;
