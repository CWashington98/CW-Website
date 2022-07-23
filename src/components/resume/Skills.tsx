import React, { useEffect } from "react";
import "./skills.css";
import { Languages, Frameworks, CloudCertifications } from "./skillsItems";
import { BsFillPatchCheckFill } from "react-icons/bs";
import AWS_SA_Badge from "../../assets/aws-certified-solutions-architect-associate.png"

const Skills = () => {

  return (
    <div className="skills-wrapper">
      <div className="skills-parent">
        <div className="certification-container">
          <a
            href="https://www.credly.com/badges/a8641cff-54ef-4251-8d97-168df6f24909/public_url"
            target={"_blank"}
          >
            <img className="certification-img"
              src={AWS_SA_Badge}
            />
          </a>
        </div>
        <div className="skills-container">
          <div className="skill-section languages-container" >
            <h3>Languages</h3>
            <div className="skill-content">
              {Languages.map((item) => (
                <div className="skill-detail">
                  <BsFillPatchCheckFill className="skill-detail-icon" />
                  <div>
                    <h4>{item.name}</h4>
                    <small className="text-light">{item.experience}</small>
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
                    <h4>{item.name}</h4>
                    <small className="text-light">{item.experience}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
