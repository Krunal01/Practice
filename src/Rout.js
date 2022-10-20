import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import SubRoute from "./SubRoute";
import NestedRout from "./NestedRout";
import Params from "./Params";
import Homes from "./Homes";
// import Page404 from "./Page404";

function Rout() {
  return (
    <div>
      {/* <h1>Rout Main page</h1> */}
      <BrowserRouter>
        <Homes />
        <Link to="/NestedRout">NestedRoute</Link>
        <br></br>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/Params">Param</Link>
        <br></br>

        <Routes>
          <Route path="/" element={<SubRoute />} />
          <Route path="/NestedRout" element={<NestedRout />} />
          {/* <Route path="/*" element={<Page404 />} /> */}
          <Route path="/Params/:name" element={<Params />} />
          <Route path="/*" element={<Navigate to="/NestedRout" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Rout;
