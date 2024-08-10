import "../assets/CSS/Login.css";
import {useState} from "react";
import DMS from "../api/DMS"

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    async function sendLogInfo(e){
       e.preventDefault();
       try{
        let response = await DMS.post('./auth/login',{
            email,
            password
           })
       }catch(error){
        console.log(error);
       }
    }

    return (
        <div class="login">
            <div class="loginTitle">login</div>
            <div><span>Email</span>
            <input 
                id="loginEmail" 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value);}}
            /></div>
            <div><span>password</span><input 
                id="loginPass" 
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value);}}    
            /></div>
            <div class="loginButton"><button onClick={sendLogInfo}>Log In</button></div>
        </div>
    )
}

export default Login;