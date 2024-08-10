import "../assets/CSS/Register.css";
import { useState } from "react";
import DMS from "../api/DMS";

const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phnNumber,setPhnNumber]=useState("");
    const [thana,setThana]=useState("");
    const [district,setDistrict]=useState("");
    const [pass, setPass]=useState("");

    async function sendRegInfo(){
        try{
            const response=await DMS.post('./register',{
                name,
                email,
                phnNumber,
                thana,
                district,
                pass
            })
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