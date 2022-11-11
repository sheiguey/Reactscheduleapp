import React from "react";
import Loging from "./login";
import Home from "./Home";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import AddEntity from "./Entity/AddEntity";


function App(){
 return(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loging />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Loging/>} />
      <Route path="/entities" element={<AddEntity/>} />
    </Routes>
    
  </BrowserRouter>
   
 );   
}

export default App;