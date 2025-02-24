import React from "react";
import "./introduce.css";

const Introduce = () => {
  return (
    <div className="introduce">
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
          <a className="introduce-btn introduce-btn-primary" href="#">Hire me</a>
          <a className="introduce-btn" href="#">Github</a>
          <a className="introduce-btn" href="#">Linkedin</a>
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
