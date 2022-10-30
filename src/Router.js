import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Menu from "./views/Menu";
import Error from "./views/Error";

export default function Routing() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu/:id" element={<Menu />} />
            <Route path="/*" element={<Error />} />
         </Routes>
      </div>
   );
}
