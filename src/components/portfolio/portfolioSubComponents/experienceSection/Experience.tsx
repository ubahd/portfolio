import React from "react";
import { softwareLogos } from "../../../../constants/constants";
import ExperienceSection from "./experienceSubcompon/ExperienceSection";

const Experience: React.FC = () => {

  return (
    <div className="experience-section pb-4">
      <div className="section-header">Work Experience</div>
      <div className="container">
        <ExperienceSection />

        <div className="text-center pt-5 abel-font-sub-header title company-header">
          <strong>Technologies</strong>
        </div>

        <div className="row">
          {softwareLogos.map((logo, i) => {
            return (
              <div
                key={i + logo.name}
                className={
                  logo.startMotion === "downward"
                    ? "logo-downward col pt-5"
                    : "logo-upward col pt-5"
                }
              >
                <img src={logo.name} alt="" className="logo-size" />
                <div className="text-center abel-font">{logo.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
