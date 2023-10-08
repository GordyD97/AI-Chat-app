import React from "react";
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";

// below the code is different than the tutorial due to missing props and values chat.title and chat.descripiton would not render due to error values needed in function statemment
// in order to render on the appplication.
const CustomHeader = ({ Chat = { title: "", description: "" } }) => {
  
  return (
    <div className="chat-header">
      <div className="flexbetween">
        <ChatBubbleLeftRightIcon className="icon-chat" />
        <h3 className="header-text">{Chat.title}</h3>
      </div>
      <div className="flexbetween">
        <PhoneIcon className="icon-phone" />
        {Chat.description !== "" ? (
          <p className="header-text">{Chat.description}</p>
        ) : (
          <p className="header-text">no chat selected</p>
        )}
      </div>
    </div>
  );
};

export default CustomHeader;
