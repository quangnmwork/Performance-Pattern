import React from "react";
import senders from "../data/senders";
import { Link } from "react-router-dom";

const ChatListItem = ({ data }) => (
  <Link to="/">
    <li className="user-info">
      <div className="user-details">
        <div
          className="user-avatar"
          style={{ backgroundImage: `url('${data.avatar}')` }}
        />
        <div className="user-name">{data.name}</div>
      </div>
    </li>
  </Link>
);

const MessageList = () => {
  return (
    <ul className="chatlist middle">
      {senders.map((sender) => (
        <ChatListItem data={sender} />
      ))}
    </ul>
  );
};

export default MessageList;
