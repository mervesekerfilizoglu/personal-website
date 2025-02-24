import React from "react";
import "./projects.css";
const Projects = () => {

  const handleGitHubClick = () => {
    window.location.href = 'https://github.com/mervesekerfilizoglu'; // github'a yönlendiriyor
  };


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
          <p4>Developed a sleek and responsive movie streaming web application that allows users to browse, search, and discover movies with a modern, Netflix-inspired UI.</p4>

          <div className="witflix-info">
            <ul>
              <li>css</li>
              <li>html</li>
              <li>axios</li>
            </ul>
          </div>



          <div className="witflix-links">
          <button className="btn" onClick={handleGitHubClick}>Github</button>
            <a className="btn" href="#">View Site</a>
          </div>
        </div>

        <div className="projects-pizza">
          <img
            src="src\assets\img\pizza.png"
            alt="Pizza"
          />
          <h4>Pizza</h4>
          <p4>Designed and developed a modern pizza ordering web application with a seamless user experience. The app allows users to browse a menu, customize their orders, and streamline the checkout process.</p4>

          <div className="pizza-info">
            <ul>
              <li>react</li>
              <li>axios</li>
              <li>cypress</li>
            </ul>
          </div>



          <div className="pizza-links">
          <button className="btn" onClick={handleGitHubClick}>Github</button>
            <a className="btn" href="#">View Site</a>
          </div>
        </div>
        <div className="projects-banking">
          <img
            src="src\assets\banking.png"
            alt="Banking"
          />
          <h4>Banking</h4>
          <p4>A functional and easy-to-use web application was developed that allows users to control multiple bank accounts through a single application with a modern and functional user interface.</p4>
          <div className="banking-info">
            <ul>
              <li>react</li>
              <li>redux</li>
              <li>hook form</li>
              <li>axios</li>
            </ul>
          </div>



          <div className="banking-links">
          <button className="btn" onClick={handleGitHubClick}>Github</button>
            <a className="btn" href="#">View Site</a>
          </div>
        </div>

      </div>
      <div className="profile-bottom-line"></div>
    </div>
  );
};

export default Projects;
