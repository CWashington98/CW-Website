import React from "react";
import TypeAnimation from 'react-type-animation';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-parent">
        <div className="about-details"></div>
        <div className="about-name">
          <span className="primary-text">
            {" "}
            Hello, I'M <span className="highlighted-text">Crishon</span>
          </span>
        </div>
        <div className="about-details-role">
            <span className="primary-text">
            <TypeAnimation
                cursor={false}
                sequence={['This text will be repeated infinitely.', 1000, '']}
                wrapper="h1"
                repeat={Infinity}
            />
            </span>
        </div>
      </div>
    </div>
  );
};

export default About;
