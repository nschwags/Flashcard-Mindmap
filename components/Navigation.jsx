import { NavLink } from "react-router-dom";
import FlashcardLogo from "../src/assets/FlashcardLogo.png";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div id="navbar_logo">
          <img src={FlashcardLogo} alt="Flashcard Mindmap Logo" />
          <div className="toggle_nav" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faBars} id="navicon" />
          </div>
        </div>
        <div className={`navlinks ${isNavOpen ? "open" : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/signup">Sign up</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
