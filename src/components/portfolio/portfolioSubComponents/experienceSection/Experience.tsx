import React from "react";
import { softwareLogos } from "../../../../constants/constants";

const Experience: React.FC = () => {
  return (
    <div className="experience-section pb-4">
      <div className="section-header">Work Experience</div>
      <div className="container">
        <div className="row no-gutters row-cols-2 company-header">
          <div className="col text-left abel-font-header">
            <strong>College Board</strong> Reston Virginia
          </div>
          <div className="col abel-font-header">August 2018 – Current</div>
        </div>
        <div className="mt-3 row-cols-1 company-title">
          <div className="col text-left">
            <div className="abel-font-sub-header">
              <strong>Send Scores Application</strong>
            </div>
            <div className="text-left pt-3 abel-font-sub-header">
              <strong>Role: </strong>Software Developer
            </div>

            <div className="text-left pt-3 abel-font-sub-header">
              <strong>Description</strong>
            </div>

            <div className="text-left pt-3 abel-font">
              This application provides the ability to send pending or available
              SAT scores to colleges using existing and new policies.
            </div>

            <div className="text-left pt-3 abel-font-sub-header">
              <strong>Responsibilites</strong>
            </div>

            <div className="pl-3 pt-3 abel-font">
              <li>
                Provide ongoing maintenance and enhancements in existing systems
                and platforms.
              </li>
              <li>Software development using agile methodology.</li>
              <li>
                Run automated code quality checks, unit tests and code coverage
                tools using ES-lint, Jest, Mocha in order to achieve continuous
                integration.
              </li>
              <li>
                Protecting confidential information to support operations.
              </li>
              <li>
                Cross-functional collaborations with data scientists, business
                users, project managers and other engineers to aid production.
              </li>
              <li>
                Creating and documenting algorithms using flowcharts, layouts,
                diagrams, and charts.
              </li>
              <li>
                Develop and discuss best practices for manual code reviews.
              </li>
            </div>

            <div className="text-left pt-5 abel-font-sub-header">
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
      </div>
    </div>
  );
};

export default Experience;
