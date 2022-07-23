import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ABOUTCONTENT } from "./AboutConstants";
import "./about.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="about-container">
      <div className="about-parent">
        <div className="about-text">
          <span className="about-header about-header-1">
            <h2>
              I could tell you about myself ... but that's
              <span className="highlight-txt"> boring.</span>
            </h2>
          </span>
          <span className="about-header about-header-2">
            <h1>Here are some things that are important to me.</h1>
          </span>
        </div>
        <div className="about-content-container">
          <div className="about-GN about-content"data-aos="fade-right" data-aos-duration="2000">
            <a href={ABOUTCONTENT.content.PSU_GN.link} target="_blank">
              <img src={ABOUTCONTENT.content.PSU_GN.image} />
            </a>
          </div>
          <div className="about-msp about-content" data-aos="fade-left" data-aos-duration="2000">
            <a href={ABOUTCONTENT.content.PSU_MSP.link} target="_blank">
              <img src={ABOUTCONTENT.content.PSU_MSP.image} />
            </a>
          </div>
          <div className="about-middleburg about-content" data-aos="fade-right" data-aos-duration="2000">
            <a href={ABOUTCONTENT.content.Middleburg.link} target="_blank">
              <img src={ABOUTCONTENT.content.Middleburg.image} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
