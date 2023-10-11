import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const StandardMessageForm = () => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [preview, setPreview] = useState("");

  const handleChange = (e) => setMessage(e.target.value);

  return (
    <div className="message-from-container">
      {preview && (
        <div className="message-form-preview">
          <img
            alt=" message from preview "
            className="message-form-preview"
            src={preview}
            onLoad={() => URL.revokeObjectURL(preview)}
          />
          <XMarkIcon
            className="message-form-icon"
            onClick={() => {
              setPreview("");
              setAttachment("");
            }}
          />
        </div>
      )}
      {/* <div className="message-form">
        <div className="message-form-input-container">
          <input
            className="message-form-input"
            value={message}
            onChange={handleChange}
            placeholder="Send a Message..."
          />
        </div>
      </div> */}
    </div>
  );
};

export default StandardMessageForm;
