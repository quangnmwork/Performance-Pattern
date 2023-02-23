import React from "react";
import { Link } from "react-router-dom";

const UserInfo = () => (
  <div className="user-info">
    <div className="user-details">
      <div className="user-avatar" />
      <div className="user-name">
        John Doe
        <span className="user-status">Online</span>
      </div>
    </div>
    <nav className="nav">
      <Link to="/overview">Home</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  </div>
);

console.log("UserInfo loading", Date.now());

export default UserInfo;
