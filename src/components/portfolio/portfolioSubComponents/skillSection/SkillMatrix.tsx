import React from "react";
import PieChart from "./skillComponents/PieChart";
import {
  frontEndstate,
  middleTierState,
  backEndState,
  languageState,
  devOpsState,
  productivityState,
} from "../../../../constants/constants";

const SkillMatrix: React.FC = () => {
  return (
    <div className="skill-section">
      <div className="section-header">Skill Matrix</div>
      <div className="container skill-container-desktop">
        <div className="row mt-3 pb-5">
          <div className="col p-2 pie-chart">
            <PieChart title="Front End" state={frontEndstate} />
          </div>
          <div className="col p-2 pie-chart">
            <PieChart title="Middle-Tier" state={middleTierState} />
          </div>
          <div className="col p-2 pie-chart">
            <PieChart title="Back-End" state={backEndState} />
          </div>
          <div className="col p-2 pie-chart">
            <PieChart title="Languages" state={languageState} />
          </div>
          <div className="col p-2 pie-chart">
            <PieChart title="Productivity" state={productivityState} />
          </div>
          <div className="col p-2 pie-chart">
            <PieChart title="DevOps" state={devOpsState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillMatrix;
