import "../assets/CSS/Auth.css";
import Login from "./Login";
import Register from "./Register";
import {useState} from 'react';

export const Auth=()=>{
    let [login,setlogin]=useState(true);
    console.log(login);

    function logForm(){
        console.log("hi from logForm");
        setlogin(true);
    } 

    function regForm(){
        setlogin(false);
    }

    return (
        <>
            <div className="AuthButtons">
                <button className="AuthLoginButton" onClick={logForm}>Login</button>
                <button className="AuthRegisterButton" onClick={regForm}>Register</button>
            </div>
            {login? <Login/>:<Register/>}
        </>
    )
}