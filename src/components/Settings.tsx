import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import SettingsForm from "./SettingsForm";

const Settings = () => (
  <div className="App">
    <div className="header">
      <h1>Settings</h1>
      <div className="nav">
        <Link to="/overview">Home</Link>
      </div>
    </div>
    <SettingsForm />
  </div>
);

export default Settings;
