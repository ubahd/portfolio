import React from "react";
import { experienceInfo } from "../../../../../constants/constants";

const ExperienceSection: React.FC = () => {
  return (
    <div className="container">
      {experienceInfo.map((info, i) => {
        return (
          <div className="row pt-5">
            <div
              className="col text-left abel-font-header company-header"
              key={i + info.company}
            >
              <strong>{info.company}</strong> {info.location}
            </div>
            <div className="col abel-font-header company-header">{info.timeline}</div>
            <div className="mt-1 row-cols-1 company-title">
              <div className="col text-left">
                <div className="abel-font-sub-header">
                  <strong>{info.project}</strong>
                </div>
                <div className="text-left pt-3 abel-font-sub-header">
                  <strong>Role: </strong>
                  {info.role}
                </div>

                <div className="text-left pt-3 abel-font-sub-header">
                  <strong>Description</strong>
                </div>

                <div className="text-left pt-3 abel-font">
                  {info.projectDescription}
                </div>

                <div className="text-left pt-3 abel-font-sub-header">
                  <strong>Responsibilites</strong>
                </div>

                {info.responsiblities.map((desc, i) => {
                  return (
                    <div className="pl-3 pt-3 abel-font">
                      <li key={"description" + i}>{desc}</li>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceSection;
