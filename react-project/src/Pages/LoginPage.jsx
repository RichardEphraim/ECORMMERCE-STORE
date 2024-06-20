import React from "react";
import './css/loginpage.css'


const LoginPage = () => {
    return(
        <div className="loginpage">
            <div className="loginpage-container">
                <h1>Sign up</h1>
                <div className="loginpage-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="password" />
                </div>
                <button>Continue</button>
                <p className="loginpage-login">Already have an account? <span>Login here</span></p>
                <div className="loginpage-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage