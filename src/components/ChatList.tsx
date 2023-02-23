import React from "react";
import messages from "../data/messages";

const ChatMessage = ({ message, side }) => (
  <div className={`msg-container ${side}`}>
    <div className="chat-msg">
      <div className="msg-contents">{message}</div>
    </div>
  </div>
);

const ChatList = () => (
  <div className="chat-list">
    {messages.map((message) => (
      <ChatMessage
        message={message.body}
        key={message.id}
        side={["left", "right"][Number(message.senderId === 1)]}
      />
    ))}
  </div>
);

console.log("ChatList loading", Date.now());

export default ChatList;
