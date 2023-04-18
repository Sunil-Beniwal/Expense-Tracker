import React from "react";
import Main from "./components/Main";
import Register from "./components/Register";
import {Route,Routes} from 'react-router-dom';
import Login from "./components/Login";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
