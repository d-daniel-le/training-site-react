import { FaEnvelope, FaLock } from "react-icons/fa"
import { Link, Outlet } from "react-router-dom"
import './RegisterLayout.css'

function RegisterLayout (){
    return (
        <div className="register-outer-container">
            <div className="register-container">
                <h2>Create an Account</h2>
                <form className="register-form">
                    <div className="user-first-last-outercontainer">

                        <div className="firstname-outercontainer">
                            <label htmlFor="firstname-input">First Name</label>
                            <div className="firstname-container">
                                <input id="firstname-input" type="text" placeholder="First Name" required/>
                            </div>
                        </div>

                        <div className="lastname-outercontainer">
                            <label htmlFor="lastname-input">Last Name</label>
                            <div className="lastname-container">
                                <input id="lastname-input" type="text" placeholder="Last Name" required/>
                            </div>
                        </div>

                    </div>

                    <div className="register-email-outercontainer">

                        <label htmlFor="register-input">Email</label>
                        <div className="register-email-container">
                            <FaEnvelope className="email-input-icon" />
                            <input id="register-input" type="email" placeholder="Enter your email. Ex: youremail@domain.com" required/>
                        </div>

                    </div>

                    <div className="register-password-outercontainer">

                        <label htmlFor="reg-password-input">Password</label>
                        <div className="register-password-container">
                            <FaLock className="password-input-icon" />
                            <input id="reg-password-input" type="password" placeholder="Enter your Password" required/>
                        </div>

                    </div>

                    <button className="register-btn">Register</button>
                </form>

                <div className="have-account-container">

                    <p>Already have an account?</p>
                    <Link id="existing-login-btn" to="/login">Login</Link>
                </div>

            </div>
            <Outlet />
        </div>
    )
}

export default RegisterLayout