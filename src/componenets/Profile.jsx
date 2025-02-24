import React from 'react';
import "./profile.css";

const Profile = () => {
  return (
    <div className='profile'>
      <h2 className="profile-title">Profile</h2>
      <div className="profile-container">
        <div className="profile-info">
          <h4>Profile</h4>
          <ul>
            <li><strong>Date of birth:</strong> 14.04.1995</li>
            <li><strong>City of Residence:</strong> İzmir</li>
            <li><strong>Educational Status:</strong>Masters degree: Ege Ünv. Biomedical Technologies USA. Bachelor's degree: Afyon Kocatepe Ünv. Biomedical Engineering</li>
            <li><strong>Masters degree,</strong> 2018</li>
            <li><strong>Preferred Role:</strong> Frontend, UI</li>
          </ul>
        </div>

        <div className="profile-about">
          <h4>About Me</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, 
            odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p>
            Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt 
            quam temporibus cumque magnam!
          </p>
        </div>
      </div>
      <div className="profile-bottom-line"></div>
    </div>
  );
};

export default Profile;
