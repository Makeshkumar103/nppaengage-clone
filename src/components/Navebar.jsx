import { useState } from "react";
import "./navebar.css";
import logo from "../assets/photos/nppaLogoLight.webp";

const Navebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar container">
      {/* Logo */}
      <div className="logo">
        <img src={logo} height="50" width="150" alt="NP|PA ENGAGE" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰"}
      </div>

      {/* Desktop Menu */}
      <ul className="navbar-links desktop">
        <li><a href="#">Home</a></li>
        <li><a href="#">Why NPs|PAs</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Cases</a></li>
        <li><a href="#">Insights</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      <div className="nav-btns desktop">
        <button className="btn">Clients</button>
        <button className="btn">Practitioners</button>
      </div>

      {/* Mobile Menu (Ternary Operator) */}
      {isOpen ? (
        <div className="mobile-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Why NPs|PAs</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Cases</a></li>
            <li><a href="#">Insights</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>

          <div className="mobile-buttons">
            <button className="btn white">Clients</button>
            <button className="btn transparent">Practitioners</button>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navebar;
