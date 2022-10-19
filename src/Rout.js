import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubRoute from "./SubRoute";
import NestedRout from "./NestedRout";

function Rout() {
  return (
    <div>
      <h1>Rout Main page</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SubRoute />} />
          <Route path="/NestedRout" element={<NestedRout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Rout;
