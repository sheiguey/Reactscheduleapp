import React from "react";
import Loging from "./login";
import Home from "./Home";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


function App(){
 return(
  
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="login" element={<Loging/>} />
    </Routes>
    
  </BrowserRouter>
   
 );   
}

export default App;