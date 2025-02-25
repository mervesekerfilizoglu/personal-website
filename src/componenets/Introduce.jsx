import React from "react";
import "./introduce.css";
import { useContext } from "react";
import { ContextLanguage } from "../context/LanguageContexts";

const Introduce = () => {

   const {dilDegistir, content}=useContext(ContextLanguage)
   const changeLanguage=()=>
    {
      dilDegistir("tr")
    }
  const handleGitHubClick = () => {
    window.location.href = 'https://github.com/mervesekerfilizoglu'; // github'a yönlendiriyor
  };
  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/merve-%C5%9Feker-filizo%C4%9Flu-7aa911127/'; // linkedIn'e yönlendiriyor
  };
  const handleHireMeClick = () => {
    window.location.href = 'https://mail.google.com/mail/u/0/#inbox'; // Gmail'e yönlendiriyor
  };
  return (
    

    <div  className="introduce">
      <div className="introduce-section">
        <div className="introduce-name">
          <span className="introduce-line"></span>
          <span className="introduce-text">{content.name}</span>
        </div>
        <h1 className="introduce-title">
        {content.desciption1} <br />
        {content.desciption2}
        </h1>
        <p className="introduce-description">
        {content.resume}
        </p>

        <div className="introduce-links">
        <button className="introduce-btn introduce-btn-primary" onClick={handleHireMeClick}>{content.HireMe}</button>
            <button className="introduce-btn" onClick={handleGitHubClick}>{content.github}</button>
            <button className="introduce-btn" onClick={handleLinkedInClick}>{content.linkedin}</button>
          
        </div>
      </div>
      <div className="introduce-image">
        <img
          src="src\assets\img\klt.jpg"
          alt="Profile"
        />
      </div>
      </div>
   
  );
};

export default Introduce;
