import React from "react";
import { AboutText } from "./AboutText";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-parent">
        <div className="about-background">
        <div className="about-education">
            Penn State Class of 2021
        </div>
        <div className="about-passions">
            Hiking, Snowboarding, Video Games
        </div>
        <div className="about-certifications">
            AWS Solution Architect - Associate
        </div>
        <div className="about-entrepreneurship">
            Co-Founder of CodeHouse Solutions, LLC
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
