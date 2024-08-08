import "../assets/CSS/Login.css";

export const Login=()=>{
    return (
        <div class="login">
            <div class="loginTitle">login</div>
            <div><span>Email</span><input type="email" placeholder="Enter your email"/></div>
            <div><span>password</span><input type="password" placeholder="Enter your password"/></div>
            <div class="loginButton"><button>Log In</button></div>
        </div>
    )
}