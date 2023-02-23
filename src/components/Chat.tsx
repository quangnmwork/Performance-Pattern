import React from "react";
import UserInfo from "./UserInfo";
import ChatList from "./ChatList";
import "../App.css";
import ChatInput from "./ChatInput";

const Chat = () => {
  return (
    <div>
      <UserInfo />
      <ChatList />
      <ChatInput />
    </div>
  );
};

export default Chat;
