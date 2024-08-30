import "../assets/CSS/Register.css";
import { useState } from "react";
import DMS from "../api/DMS";
import { useNavigate } from "react-router-dom";

const Register=()=>{
    const navigate = useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phnNumber,setPhnNumber]=useState("");
    const [thana,setThana]=useState("");
    const [district,setDistrict]=useState("");
    const [pass, setPass]=useState("");
    const [address,setAddress]=useState("");

    async function sendRegInfo(){
        try{
            const regInfo={
                Name:name,
                Email:email,
                Phone:phnNumber,
                Address:address + ", " + thana + ", " + district,
                Password:pass,
                UserType: ["affected"],
                Available : true,
                Community : [],
                CreationTime : new Date().toISOString()
            }
            console.log(regInfo);
            const response = await fetch("http://localhost:5000/auth/register",{    
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(regInfo)
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
            if(response.status === 201){
                window.location.href = "/auth/login";                
            }
            else if(response.status === 500){
                alert(data.error);
            }


        }catch(err){
            console.log(err);
        }
    }

    return (
        <div class="RegForm">
            <div className="RegTitle">Fill Up The Form</div>
            <div className="RegName">
                <label>Name</label>
                <input 
                    type="text" 
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e)=>{setName(e.target.value);}}
                />
            </div>
            <div className="RegEmail">
                <label>Email</label>
                <input 
                    type="text" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value);}}
                />
            </div>
            <div className="RegPhoneNumber">
                <label>Phone number</label>
                <input 
                    type="text" 
                    placeholder="Enter your phone number"
                    value={phnNumber}
                    onChange={(e)=>{setPhnNumber(e.target.value);}}
                />
            </div>
            <div className="RegThana">
                <label>Thana</label>
                <input 
                    type="text" 
                    placeholder="Enter your thana"
                    value={thana}
                    onChange={(e)=>{setThana(e.target.value);}}
                />
            </div>
            <div className="RegDistrict">
                <label>District</label>
                <input 
                    type="text" 
                    placeholder="Enter your district"
                    value={district}
                    onChange={(e)=>{setDistrict(e.target.value);}}
                />
            </div>
            <div className="RegAddress">
                <label>Address</label>
                <input 
                    type="text" 
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e)=>{setAddress(e.target.value);}}
                />
            </div>
            <div className="RegPassword">
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="Give a password"
                    value={pass}
                    onChange={(e)=>{setPass(e.target.value);}}        
                />
            </div>
            <div className="RegButton" onClick={sendRegInfo}>Register</div>
        </div>
    )
}

export default Register;