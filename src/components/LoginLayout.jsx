import { FaEnvelope, FaLock } from "react-icons/fa"
import { Link, Outlet } from "react-router-dom"
import './LoginLayout.css'

function LoginLayout(){
    return (
        <div className="login-outer-container">
            <div className="login-container">
                <h2>Sign in</h2>
                <form className="login-form">
                    <div className="login-username-outercontainer">
                        <label htmlFor="email-input">Email Address</label>
                        <div className="login-email-container">
                            <FaEnvelope className="email-input-icon"/>
                            <input type="text" placeholder="youremail@domain.com" id="email-input"/>
                        </div>
                    </div>

                    <div className="login-password-outercontainer">
                        <label htmlFor="password-input">Password</label>
                        <div className="login-password-container">
                            <FaLock className="password-input-icon"/>
                            <input type="password"  placeholder="Password" id="password-input"/>
                        </div>
                    </div>
                    <button className="login-btn">Login</button>
                </form>
                <div className="create-account-container">            
                    <p>Don't have an account?</p>
                    <Link id="create-account-btn" to="/register">Create An Account</Link>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default LoginLayout