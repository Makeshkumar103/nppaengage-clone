import "./navbar.css";
import logo from '../assets/photos/nppaLogoLight.webp';

const Navbar = () => {
    return (
        <nav className="container flex">
            <div className="logo">
                <img src={logo} height="50" width="150" alt="NP|PA ENGAGE" /> 
            </div>
            <ul className="navbar-links flex">
                <li><a href="#">Home</a></li>
                <li><a href="#">Why NPs|PAs</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Cases</a></li>
                <li><a href="#">Insights</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="nav-btns flex">
                <button className="btn btn-primary">Clients</button>
                <button className="btn btn-secondary">Practitioners</button>
            </div>
        </nav>
    );
}

export default Navbar;