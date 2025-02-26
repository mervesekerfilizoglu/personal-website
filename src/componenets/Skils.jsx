import React from 'react';
import "./skils.css";

import { useContext } from "react";
import { ContextLanguage } from "../context/LanguageContexts";

const Skils = () => {
  const {dilDegistir, content}=useContext(ContextLanguage)
     const changeLanguage=()=>
      {
        dilDegistir("tr")
      }


  return (
    <div>
 
    <div id="skills" className='skils'>
      <h2 className="skils-title">{content.skills}</h2>
      <div className="skils-container">
        <div className="skils-container-item">
            <h4>Java Script</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="skils-container-item">
        <h4>React.Js</h4>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="skils-container-item">
        <h4>Node.Js</h4>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="skils-bottom-line"></div>
    </div>
    </div>
  )
}

export default Skils;
