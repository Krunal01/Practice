import React from "react";
import "./Style.css";
import style from "./style.module.css";

function Style() {
  return (
    <div>
      <h1 className="Ex">Style with External file</h1>
      <h1 className={style.xe}>Style with Module file</h1>
      <h1 style={{ color: "blue", backgroundColor: "pink" }}>Inline Style</h1>
    </div>
  );
}

export default Style;
