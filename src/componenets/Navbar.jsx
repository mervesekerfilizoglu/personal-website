import React from "react";
import "./navbar.css";
 import useDarkMode from "../hooks/useDarkMode";
 import { useContext } from "react";
 import { ContextLanguage } from "../context/LanguageContexts";

const Navbar = () => {
  const [isDarkMode,setIsDarkMode]=useDarkMode(); 
  const {dilDegistir, content}=useContext(ContextLanguage)
  
  const changeLanguage=()=>
  {
    dilDegistir('tr')
  }

  return (
    <div className="navbar">
      <div className="navbar-name">M</div>
      <div className="navbar-links">
      <a href="#skills" className="navbar-link-item">{content.skills}</a>
        <a href="#projects" className="navbar-link-item">{content.Projects}</a>
        <a href="#hire-me" className="navbar-link-item">{content.HireMe}</a>
        <button onClick={()=>setIsDarkMode(!isDarkMode)}>
          Theme
        </button> 
        <button onClick={changeLanguage}>
  Türkçe'ye Geç
</button>
      </div>
    </div>
  );
};

export default Navbar;