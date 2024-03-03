import Login from "../src/components/Login";
import React from "react";
import { Route, Routes } from "react-router";
import Lists from "./components/Lists";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/" element={<Login/>}/>
    </Routes>
  );
}

export default App;
