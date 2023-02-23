import React from "react";
import Horizontal from "./icons/Horizontal";

const UserInfo = () => (
  <div className="user-info">
    <div className="user-details">
      <div className="user-avatar" />
      <div className="user-name">
        John Doe
        <span className="user-status">Online</span>
      </div>
    </div>
    <Horizontal />
  </div>
);

console.log("UserInfo loading", Date.now());

export default UserInfo;
