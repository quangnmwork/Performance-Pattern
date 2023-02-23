import React from "react";

const SettingsForm = () => (
  <form className="settings-form">
    <label>
      <span>Avatar</span>
      <input type="file" name="avatar" />
    </label>
    <label>
      <span>Username</span>
      <input type="text" />
    </label>
    <label>
      <span>First Name</span>
      <input type="text" />
    </label>
    <label>
      <span>Last Name</span>
      <input type="text" />
    </label>
    <label>
      <span>Phone Number</span>
      <input type="text" />
    </label>
    <div className="centered ">
      <button className="button">Save</button>
    </div>
  </form>
);

export default SettingsForm;
