import React from "react";
import { ChatBubbleLeftRightICon, PhoneIcon } from "@heroicons/react/24/solid";

const CustomHeader = () => {
  return (
    <div className="chat-header">
      <div className="flexbetween">
        <ChatBubbleLeftRightICon className="icon-chat" />
        <h3 className="header-text">{chat.title}</h3>
      </div>
      <div className="flexbetween">
        <PhoneIcon className="icon-phone" />
        <p className="header-text">{chat.description}</p>
      </div>
    </div>
  );
};

export default CustomHeader;
