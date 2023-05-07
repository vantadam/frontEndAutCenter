import "./Login.css"
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import fb from "../Assets/fb.png";
import google from "../Assets/google.png";

function Login(){

const navigate=useNavigate();
    
return (
 <div className="loginPage">
 <div className="signINcontainer">
<p className="cardTitle">Sign In</p>
<input type="text" class="input-field" placeholder="Enter text"/>
<input type="text" class="input-field" placeholder="Enter text"/>
<div className="button" onClick={()=>alert("hello")}>SIGN IN</div>
<p className="optionsText">Or login with</p>
<div className="options">
    <div className="option"><img className="icon" src={fb}/></div> <div className="option"><img className="icon2" src={google}/></div>
</div>
<p className="signUp" onClick={()=>navigate('/Register')}>Sign Up</p>
 </div>
 </div>

)
}
export default Login