import React from "react";
import "./footer.css";
 
 import { useContext } from "react";
import { ContextLanguage } from "../context/LanguageContexts";


const Footer = () => {
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
      <div>
   

      <div className="footer">
        <div className="footer-section">
         
          <h1 className="footer-title">
          {content.footerTitle} </h1>
          </div>
          <div className="email-others-links">
          <div className="footer-email-links">
          <button className="footer-email-btn" onClick={handleHireMeClick}>sekermer33@gmail.com</button>
          
          </div>
  
          <div className="footer-links">
          <button className="footer-btn"> {content.personalBlog}</button>

            <button className="footer-btn" onClick={handleGitHubClick}> {content.github}</button>

            <button className="footer-btn" onClick={handleLinkedInClick}> {content.linkedin}</button>
          </div>
          </div>
       </div>
      </div>
    );
  };
  
  export default Footer;
  
