import React, { useState } from "react";
import Flip from "react-reveal/Flip";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import SchoolIcon from "@material-ui/icons/School";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface TitleCardProps {
  label: string;
  description?: string;
  mobile?: string;
  email?: string;
  college?: string;
  degree?: string;
  collegeTimeline?: string;
}

const TitleCard: React.FC<TitleCardProps> = ({
  label,
  description,
  mobile,
  email,
  college,
  degree,
  collegeTimeline,
}) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <div
        className="title-block"
        onClick={
          showContent === false
            ? () => {
                setShowContent(true);
              }
            : () => {
                setShowContent(false);
              }
        }
      >
        {label}
        <ExpandMoreIcon />
      </div>
      {description && (
        <Flip left collapse when={showContent}>
          <div className="title-description">{description}</div>
        </Flip>
      )}
      {mobile && email && (
        <Flip left collapse when={showContent}>
          <div className="title-description">
            <div className="text-left">
              <CallIcon />
              <div className="d-inline pl-3">{mobile}</div>
            </div>
            <div className="text-left">
              <EmailIcon />
              <div className="d-inline pl-3">{email}</div>
            </div>
          </div>
        </Flip>
      )}
      {college && degree && collegeTimeline && (
        <Flip left collapse when={showContent}>
          <div className="title-description">
            <div className="text-left">
              <AccountBalanceIcon />
              <div className="d-inline pl-3">{college}</div>
            </div>
            <div className="text-left">
              <SchoolIcon />
              <div className="d-inline pl-3">{degree}</div>
              <div className="text-center pt-2">{collegeTimeline}</div>
            </div>
          </div>
        </Flip>
      )}
    </div>
  );
};

export default TitleCard;
