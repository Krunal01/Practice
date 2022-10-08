import { useState } from "react";

function Cs() {
  const [count, setCount] = useState(0);
  const counterIncrement = () => {
    setCount(count + 1);
  };
  return { count, counterIncrement };
}

export default Cs;
