import React from "react";
import "./projects.css";
const Projects = () => {
    return (
      <div className='projects'>
        <h2 className="projects-title">Projects</h2>
        <div className="projects-container">
        <div className="projects-witflix">
      
        <img
          src="src\assets\img\witflix.png"
          alt="Witflix"
        />
            <h4>Witflix</h4>

            <div className="witflix-info">
          <ul>
            <li>css</li>
            <li>html</li>
            <li>axios</li>
          </ul>
        </div>



            <div className="witflix-links">
          <a className="btn " href="#">GitHub</a>
          <a className="btn" href="#">View Site</a>
        </div>
            </div>
           
          <div className="projects-pizza">
          <img
          src="src\assets\img\pizza.png"
          alt="Pizza"
        />
            <h4>Pizza</h4>

            <div className="pizza-info">
          <ul>
            <li>react</li>
            <li>axios</li>
            <li>cypress</li>
          </ul>
        </div>



            <div className="pizza-links">
            <a className="btn " href="#">GitHub</a>
          <a className="btn" href="#">View Site</a>
        </div>
        </div>
        <div className="projects-banking">
        <img
          src="src\assets\banking.png"
          alt="Banking"
        />
            <h4>Banking</h4>
            <div className="banking-info">
          <ul>
            <li>react</li>
            <li>redux</li>
            <li>hook form</li>
            <li>axios</li>
          </ul>
        </div>



            <div className="banking-links">
            <a className="btn" href="#">GitHub</a>
          <a className="btn" href="#">View Site</a>
        </div>
        </div>
     
      </div>
      <div className="profile-bottom-line"></div>
      </div>
    );
  };
  
  export default Projects;
  