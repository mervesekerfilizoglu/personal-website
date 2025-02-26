import React from 'react';
import "./profile.css";
import { useContext } from "react";
import { ContextLanguage } from "../context/LanguageContexts";

const Profile = () => {
  const {dilDegistir, content}=useContext(ContextLanguage)
     const changeLanguage=()=>
      {
        dilDegistir("tr")
      }

      
  return (
    <div className='profile'>
      <h2 className="profile-title">{content.profile}</h2>
      <div className="profile-container">
        <div className="profile-info">
          <h4>{content.profile}</h4>
          <ul>
            <li><strong>{content.dateOfBirth}</strong> 14.04.1995</li>
            <li><strong>{content.cityOfResidence}</strong> İzmir</li>
            <li><strong>{content.educationalStatus}</strong>{content.educationalStatus2}</li>
            <li><strong>{content.degree}</strong> 2018</li>
            <li><strong>{content.preferredRole}</strong> Frontend, UI</li>
          </ul>
        </div>

        <div className="profile-about">
          <h4>{content.aboutMe}</h4>
          <p>
          {content.goals} 
          </p>
          
        </div>
      </div>
      <div className="profile-bottom-line"></div>
    </div>
  );
};

export default Profile;
