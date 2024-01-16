import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Skeleton } from "@mui/material";

import "./CaseChat.scss";

interface Message {
  id: number;
  text: string;
  sentByUser: boolean;
  time: string;
}

const CaseChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = () => {
    if (inputText.trim() !== "") {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        sentByUser: true,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputText("");
      setLoading(true);
      scrollToBottom();
      simulateDemoReply();
    }
  };

  const simulateDemoReply = () => {
    setTimeout(() => {
      setLoading(false);
      const demoReply: Message = {
        id: messages.length + 1,
        text: "This is a demo reply from Justice!",
        sentByUser: false,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prevMessages) => [...prevMessages, demoReply]);
      scrollToBottom();
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: messages.length + 1,
        text: "Welcome to Case Chat! Type your message below.",
        sentByUser: false,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages([welcomeMessage]);
      scrollToBottom();
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="case-chat">
      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sentByUser ? "sent" : "received"}`}
          >
            <div className="message-text">{message.text}</div>
            <div
              className={`message-time-${
                message.sentByUser ? "sent" : "received"
              }`}
            >
              {message.time}
            </div>
          </div>
        ))}
        {loading && (
          <div className="loading-skeleton">
            <Skeleton height={50} />
          </div>
        )}
      </div>
      <div className="chat-input-container">
        <input
          ref={inputRef}
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="chat-input"
        />
        <FontAwesomeIcon
          onClick={sendMessage}
          className="send-button"
          icon={faPaperPlane}
        />
      </div>
    </div>
  );
};

export default CaseChat;
