import "./Login.css"
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import fb from "../Assets/fb.png";
import google from "../Assets/google.png";

function Login(){
const [email,setEmail]=useState("");
const [pass,setPass]=useState("");

function signin()
{
    let data={
        "email": email,
        "password": pass,
      };

      postJSON(data);
}
async function postJSON(data) {
  try {
    const response = await fetch("http://localhost:8081/api/auth/authenticate", {
      method: "POST",
      headers: {
        
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
    if (result.errors){
      alert(result.errors)
    }
    else {
      window.location.href="../index.html";
    }
  } catch (error) {
    console.error("Error:", error);
    
  }
}

const navigate=useNavigate();
    
return (
 <div className="loginPage">
 <div className="signINcontainer">
<p className="cardTitle">Sign In</p>
<input type="email"  className='input' placeholder='Email'onChange={val=>{setEmail(val.target.value)}}/>
<input type="password"  className='input' placeholder='Password'onChange={val=>{setPass(val.target.value)}}/>
<div className="button" onClick={()=>signin()}>SIGN IN</div>
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