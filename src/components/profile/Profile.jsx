import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { SEQUENCE_ITEMS } from "../constants/constants";
import "./profile.css";
import resume2022 from "../../assets/resume2022.pdf";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <span className="profile-details-name">Hey, I'm Crishon</span>
          <div className="profile-details-role">
            <Typewriter
              options={{
                strings: SEQUENCE_ITEMS.all,
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </div>
        </div>
        <div className="profile-picture">Profile Picture Placeholder</div>
      </div>
      <div className="profile-options" >
        <a>
          <button className="profile-btn contact-btn">Let's work</button>
        </a>
        <a href={resume2022} download="Crishon_Washington_Resume">
          <button className="profile-btn resume-btn">Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
