import React from "react";
import "./Card.css";
import priorityIcon from "../../icons/Img - High Priority.svg";
import userProfilePic from "../../icons/user.png";
import { getStatusIcon } from "../../utils/helper";

const Card = ({ ticket, userData, hideStatusIcon, hideProfileIcon }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{ticket.id}</span>
        {hideProfileIcon ? null : (
          <div className="user-avatar-wrapper">
            <img src={userProfilePic} alt="User" className="user-avatar" />
            <span className={`active-status ${userData.available ? "active" : ""}`}></span>
          </div>
        )}
      </div>
      <div className="card-title-wrapper">
        {hideStatusIcon ? null : 
        <div className="status-icon">
          {getStatusIcon(ticket.status)}
        </div>}
        <div className="card-title">{ticket.title}</div>
      </div>
      <div className="card-footer">
        <div className="priority">
          <img src={priorityIcon} alt="Priority Icon" />
        </div>

        {ticket.tag.map((t) => (
          <div className="feature-request">
            <div className="feature-request-icon"></div> {/* Grey circle */}
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
