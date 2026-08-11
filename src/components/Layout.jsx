import { Link, Outlet } from "react-router-dom";
import './Layout.css'
import collegeLogo from "../assets/images/BellevueCollegeLogoHorzClr.png"

function Layout(){
    return (
        <div className="nav-menu">
            <nav className="nav-container">
                <div className="college-logo">
                    <Link to='/'><img src={collegeLogo} alt="BC Logo"/></Link>
                </div>
                <div className="nav-options">
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}
export default Layout