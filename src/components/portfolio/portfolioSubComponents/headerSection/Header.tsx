import React from "react";
import profilePic from "../../../../asset/profile.jpg";
import { headerConstants } from "../../../../constants/constants";
import TitleCard from "./headerComponents/TitleCard";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="col">
          <img className="img" alt="" src={profilePic} />
        </div>
        <div className="row">
          <div className="col p-2">
            <TitleCard
              label="Professional Summary"
              description={headerConstants.SUMMARY_DESCRIPTION}
            />
          </div>
          <div className="col p-2">
            <TitleCard
              label="Contact Information"
              email={headerConstants.EMAIL}
              mobile={headerConstants.MOBILE_NUMBER}
            />
          </div>
          <div className="col p-2">
            <TitleCard
              label="Education"
              college={headerConstants.UNIVERSITY}
              degree={headerConstants.DEGREE}
              collegeTimeline={headerConstants.COLLEGE_TIMELINE}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
