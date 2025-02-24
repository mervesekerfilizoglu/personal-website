import React from "react";
import "./introduce.css";

const Introduce = () => {
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
          <span className="introduce-text">Merve Şeker Filizoğlu</span>
        </div>
        <h1 className="introduce-title">
          Creative thinker <br />
          Minimalism lover
        </h1>
        <p className="introduce-description">
          Hi, I'm Merve. I'm a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with great
          user experiences. Let’s shake hands with me.
        </p>

        <div className="introduce-links">
        <button className="introduce-btn introduce-btn-primary" onClick={handleHireMeClick}>Hire me</button>
            <button className="introduce-btn" onClick={handleGitHubClick}>Github</button>
            <button className="introduce-btn" onClick={handleLinkedInClick}>Linkedin</button>
          
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
