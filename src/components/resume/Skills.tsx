import React from "react";
import "./skills.css";
import { Languages, Frameworks, CloudCertifications } from "./skillsItems";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <div className="skills-parent">
        <div className="skills-container">
          <div className="skill-section languages-container">
            <h3>Languages</h3>
            <div className="skill-content">
              {Languages.map((item) => (
                <div className="skill-detail">
                  <BsFillPatchCheckFill className="skill-detail-icon" />
                  <div>
                    <h4>{item}</h4>
                    <small className="text-light">experience</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skill-section frameworks-container">
            <h3>Frameworks</h3>
            <div className="skill-content">
              {Frameworks.map((item) => (
                <div className="skill-detail">
                  <BsFillPatchCheckFill className="skill-detail-icon" />
                  <div>
                    <h4>{item}</h4>
                    <small className="text-light">experience</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skill-section cloud-container">
            <h3>Cloud Certifications</h3>
            <div className="skill-content"></div>
            {/* <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="a8641cff-54ef-4251-8d97-168df6f24909"
              data-share-badge-host="https://www.credly.com"
            ></div>
            <script
              type="text/javascript"
              async
              src="//cdn.credly.com/assets/utilities/embed.js"
            ></script> */}
            {/* {CloudCertifications.map((item) => <article>{item.url}</article>)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
