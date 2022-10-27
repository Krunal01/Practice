import React, { useRef, useEffect } from "react";
function Prophooks(props) {
  const lastVal = useRef();
  useEffect(() => {
    lastVal.current = props.count;
  });
  const previousProps = lastVal.current;
  return (
    <React.Fragment>
      <h1>currnet val : {props.count}</h1>
      <h1>previous val : {previousProps}</h1>
    </React.Fragment>
  );
}

export default Prophooks;
