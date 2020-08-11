import React from "react";
import Header from "./portfolioSubComponents/headerSection/Header";
import SkillMatrix from "./portfolioSubComponents/skillSection/SkillMatrix";
import Experience from "./portfolioSubComponents/experienceSection/Experience";
import "./style.scss";

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <Header />
      <SkillMatrix />
      <Experience />
    </div>
  );
};

export default Portfolio;
