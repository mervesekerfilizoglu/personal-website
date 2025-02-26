import React from "react";
import "./projects.css";

import { useContext } from "react";
import { ContextLanguage } from "../context/LanguageContexts";

const Projects = () => {
  const {dilDegistir, content}=useContext(ContextLanguage)
       const changeLanguage=()=>
        {
          dilDegistir("tr")
        }
  



  const handleGitHubClick = () => {
    window.location.href = 'https://github.com/mervesekerfilizoglu'; // github'a yönlendiriyor
  };


  return (
    <div>
    

    <div id="projects" className='projects'>
      <h2 className="projects-title">{content.projects}</h2>
      <div className="projects-container">
        <div className="projects-witflix">

          <img
            src="src\assets\img\witflix.png"
            alt="Witflix"
          />
          <h4>Witflix</h4>
          <p4>{content.witflix}</p4>

          <div className="witflix-info">
            <ul>
              <li>css</li>
              <li>html</li>
              <li>axios</li>
            </ul>
          </div>



          <div className="witflix-links">
          <button className="btn" onClick={handleGitHubClick}>{content.github}</button>
            <a className="btn" href="#">{content.viewSite}</a>
          </div>
        </div>

        <div className="projects-pizza">
          <img
            src="src\assets\img\pizza.png"
            alt="Pizza"
          />
          <h4>Pizza</h4>
          <p4>{content.pizza}</p4>

          <div className="pizza-info">
            <ul>
              <li>react</li>
              <li>axios</li>
              <li>cypress</li>
            </ul>
          </div>



          <div className="pizza-links">
          <button className="btn" onClick={handleGitHubClick}>{content.github}</button>
            <a className="btn" href="#">{content.viewSite}</a>
          </div>
        </div>
        <div className="projects-banking">
          <img
            src="src\assets\banking.png"
            alt="Banking"
          />
          <h4>{content.banking}</h4>
          <p4>{content.banking1}</p4>
          <div className="banking-info">
            <ul>
              <li>react</li>
              <li>redux</li>
              <li>hook form</li>
              <li>axios</li>
            </ul>
          </div>



          <div className="banking-links">
          <button className="btn" onClick={handleGitHubClick}>{content.github}</button>
            <a className="btn" href="#">{content.viewSite}</a>
          </div>
        </div>

      </div>
      <div className="profile-bottom-line"></div>
    </div>
    </div>
  );
};

export default Projects;
