import { Outlet, Link } from "react-router-dom";
import './Home.css'

function Navbar() {
    return (
        <>
        <div className="connect_pages">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>

      <Outlet />        
        </>
    )
}

export default Navbar