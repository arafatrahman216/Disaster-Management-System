import "../assets/CSS/Login.css";
import {useState} from "react";
import DMS from "../api/DMS"
import { useNavigate } from "react-router-dom";
import { changeRole} from "../store/roleSlice";
import { useDispatch } from "react-redux";

const Login=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    async function sendLogInfo(e){
       e.preventDefault();
       try{
           const logInfo=await fetch("http://localhost:5000/auth/login",{
                method:"POST",
                headers:{
                     "Content-Type":"application/json"
                },
                body:JSON.stringify({
                     Email:email,
                     Password:password
                })
              });
                console.log(logInfo);
                
                const data=await logInfo.json();
                console.log(data);
                if(logInfo.status===200){
                    localStorage.setItem("user",JSON.stringify(data.user));
                    localStorage.setItem("token",data.token);
                    const role = {
                        role:data.user.UserType,
                        loggedIn:true,
                        isAdmin : data.user.UserType.includes("admin")
                    }
                    console.log(role);
                    
                    dispatch(changeRole(role));
                    navigate("/");

                }
                
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