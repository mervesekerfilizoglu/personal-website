import React, { useContext } from "react";
import "./navbar.css";
import useDarkMode from "../hooks/useDarkMode";
import { ContextLanguage } from "../context/LanguageContexts";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const { dilDegistir, content } = useContext(ContextLanguage);

  const changeLanguage = () => {
    dilDegistir((prev) => (prev === "en" ? "tr" : "en"));
  };

  const scrollToSkills = () => {
    const skillsSection = document.querySelector("#skills");// 'skills' id'si ile hedef elementi seçiyoruz
    const projectsSection = document.querySelector("#projects"); 
  
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" }); // Yumuşak kaydırma
      projectsSection.scrollIntoView({ behavior: "smooth" });
     
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-name">M</div>
      <div className="navbar-links">
        <a
          href="#skills"
          className="navbar-link-item"
          onClick={(e) => {
            e.preventDefault(); // Default link davranışını engelle
            scrollToSkills(); // Kaydırma fonksiyonunu tetikle
          }}
        >
          {content.skills}
        </a>
        <a href="#projects" className="navbar-link-item">
          {content.Projects}
        </a>
        <a href="#hire-me" className="navbar-link-item">
          {content.HireMe}
        </a>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>Theme</button>
        <button onClick={changeLanguage}>Tr/Eng</button>
      </div>
    </div>
  );
};

export default Navbar;