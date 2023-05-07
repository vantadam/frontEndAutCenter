import "./Register.css"
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import fb from "../Assets/fb.png";
import google from "../Assets/google.png";

function Register(){
    const [email,setEmail]=useState("");
const [pass,setPass]=useState("");
const [name,setName]=useState("");
const [lname,setLname]=useState("");
    const navigate=useNavigate();

    
return (
 <div className="loginPage">
 <div className="signINcontainer">
<p className="cardTitle">Sign Up</p>
<input type="text"  className='input' placeholder='First Name'onChange={val=>{setName(val.target.value)}}/>
<input type="text"  className='input' placeholder='Last Name'onChange={val=>{setLname(val.target.value)}}/>
<input type="email"  className='input' placeholder='Email'onChange={val=>{setEmail(val.target.value)}}/>
<input type="password"  className='input' placeholder='Password'onChange={val=>{setPass(val.target.value)}}/>

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