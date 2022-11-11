import React from "react";
import { useNavigate } from "react-router-dom";
import './login.css'

function Loging(){
  const navigate = useNavigate();

  

  return(
      <div class="main">
          <p class="sign" align="center">Sign in</p>
          <form class="form1">
              <input class="un " type="text" align="center" placeholder="Username" />
              <input class="pass" type="password" align="center" placeholder="Password"/>
              <a class="submit" align="center" onClick={()=>{navigate("/home")}}>Sign in</a>
              <p class="forgot" align="center"><a href="#">Forgot Password?</a></p>
            </form>
     </div>
  );
}

export default Loging;