import "./Login.css"
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import fb from "../Assets/fb.png";
import google from "../Assets/google.png";

function Register(){
    const navigate=useNavigate();

    
return (
 <div className="loginPage">
 <div className="signINcontainer">
<p className="cardTitle">Sign Up</p>
<input type="fname" class="input-field" placeholder="Enter text"/>
<input type="lname" class="input-field" placeholder="Enter text"/>
<input type="email" class="input-field" placeholder="Enter text"/>
<input type="password" class="input-field" placeholder="Enter text"/>

<div className="button" onClick={()=>alert("hello")}>SIGN UP</div>
<p className="optionsText">Or login with</p>
<div className="options">
    <div className="option"><img className="icon" src={fb}/></div> <div className="option"><img className="icon2" src={google}/></div>
</div>
<p className="signUp" onClick={()=>{navigate("/")}}>Sign in</p>
 </div>
 </div>

)
}
export default Register