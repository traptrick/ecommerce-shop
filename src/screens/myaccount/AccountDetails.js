import React from "react";
import "./AccountDetails.css";

const AccountDetails = () => {
  return (
    <div className="accountBody">
      <div className="menu">
        <div className="menu-body">
          <a href="#">
            <i class="fa-solid fa-user"></i>&nbsp;&nbsp; Account Settings
          </a>
          <a href="#">
            <i class="fa-solid fa-message"></i>&nbsp;&nbsp; Give Feedback
          </a>
          <a href="#">
            <i class="fa-solid fa-circle-info"></i>&nbsp;&nbsp; About
          </a>
          <a href="#">
            <i class="fa-solid fa-headset"></i>&nbsp;&nbsp; Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
