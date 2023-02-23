import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import MessageList from "./MessageList";

const Overview = () => (
  <div className="App">
    <div className="header upper">
      <h1>Chats</h1>
      <div className="nav">
        <Link to="/settings">Settings</Link>
      </div>
    </div>
    <MessageList />
  </div>
);

export default Overview;
