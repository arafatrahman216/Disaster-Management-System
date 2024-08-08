import "../assets/CSS/Register.css";

export const Register=()=>{
    return (
        <div class="RegForm">
            <div className="RegTitle">Fill Up The Form</div>
            <div className="RegName"><label>Name</label><input type="text" placeholder="Enter your name"/></div>
            <div className="RegEmail"><label>Email</label><input type="text" placeholder="Enter your email"/></div>
            <div className="RegPhoneNumber"><label>Phone number</label><input type="text" placeholder="Enter your phone number"/></div>
            <div className="RegThana"><label>Thana</label><input type="text" placeholder="Enter your thana"/></div>
            <div className="RegDistrict"><label>District</label><input type="text" placeholder="Enter your district"/></div>
            <div className="RegPassword"><label>Password</label><input type="password" placeholder="Give a password"/></div>
            <div className="RegButton"><button>Register</button></div>
        </div>
    )
}