import React from "react";
import UserInfo from "./components/UserInfo";
import ChatList from "./components/ChatList";
import "./App.css";
import ChatInput from "./components/ChatInput";

const App = () => {
  return (
    <div>
      <UserInfo />
      <ChatList />
      <ChatInput />
    </div>
  );
};

export default App;
