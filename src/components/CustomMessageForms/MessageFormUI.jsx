import {
  PaperAirplaneIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Dropzone from "react-dropzone";


const MessageFormUI = ({
    setAttachment,
    message,
    handleChange,
    handleSubmit,
    appendText,
    handleKeyDown,

}) => {
    const [ preview, setPreview ] =useState("");
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
      <div
        className="message-form"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="message-form-input-container">
          <input
            className="message-form-input"
            type="text"
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Send a Message..."
          />
          {appendText && (
            <input 
            className="message-form-assist"
            type="text"
            disabled="disabled"
            value={`${message} ${appendText}`}
            />
          )}
        </div>
        <div className="message-form-icons">
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            noClick={true}
            onDrop={(acceptedFiles) => {
              setAttachment(acceptedFiles[0]);
              setPreview(URL.createObjectURL(acceptedFiles[0]));
            }}
          >
            {({ getRootProps, getInputProps, open }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <PaperClipIcon
                  className="message-form-icon-clip"
                  onClick={open}
                />
              </div>
            )}
          </Dropzone>

          <hr className="vertical-line" />
          <PaperAirplaneIcon
            className="message-form-icon-airplane"
            onClick={() => {
              setPreview("");
              handleSubmit();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MessageFormUI