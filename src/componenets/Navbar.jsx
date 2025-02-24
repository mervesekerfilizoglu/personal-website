import React from "react";
import "./navbar.css";
 import useDarkMode from "../hooks/useDarkMode";
const Navbar = () => {
  const [isDarkMode,setIsDarkMode]=useDarkMode(); 

  return (
    <div className="navbar">
      <div className="navbar-name">M</div>
      <div className="navbar-links">
      <a href="#skills" className="navbar-link-item">Skills</a>
        <a href="#projects" className="navbar-link-item">Projects</a>
        <a href="#hire-me" className="navbar-link-item">Hire me</a>
        <button onClick={()=>setIsDarkMode(!isDarkMode)}>
          Theme
        </button> 
      </div>
    </div>
  );
};

export default Navbar;