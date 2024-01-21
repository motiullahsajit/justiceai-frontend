import React, { useState, useEffect } from "react";
import {
  faCircleInfo,
  faMagnifyingGlass,
  faPaperPlane,
  faPaperclip,
  faPhone,
  faPlay,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../assets/images/Avatar.png";

import "./ChatView.scss";

interface ChatPerson {
  id: number;
  name: string;
}

interface Message {
  id: number;
  text: string;
  sentByUser: boolean;
  senderId: number;
}

const ChatView = () => {
  const [chatPeople, setChatPeople] = useState<ChatPerson[]>([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]);

  const [selectedPerson, setSelectedPerson] = useState<ChatPerson | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const selectChatPerson = (person: ChatPerson) => {
    setSelectedPerson(person);
    setMessages([
      { id: 1, text: "Hello!", sentByUser: false, senderId: person.id },
      { id: 2, text: "Hi there!", sentByUser: true, senderId: person.id },
    ]);
  };

  const sendMessage = () => {
    if (inputText.trim() !== "") {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        sentByUser: true,
        senderId: selectedPerson?.id || 0,
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputText("");
    }
  };

  useEffect(() => {
    if (chatPeople.length > 0) {
      selectChatPerson(chatPeople[0]);
    }
  }, [chatPeople]);

  return (
    <main className="flex justify-center">
      <section className="chat-view-container flex">
        <div className="chat-people-list">
          <h1>Messages</h1>
          <div className="search-add flex justify-between">
            <div className="search-input">
              <input type="search" placeholder="Search Chat" />
              <FontAwesomeIcon
                className="search-icon"
                icon={faMagnifyingGlass}
              />
            </div>
            <button>CHAT +</button>
          </div>
          <ul>
            {chatPeople.map((person) => (
              <li key={person.id} onClick={() => selectChatPerson(person)}>
                <img
                  src={avatar}
                  alt={`Avatar of ${person.name}`}
                  className="avatar"
                />
                <div className="info">
                  <div className="title">{person.name}</div>
                  <div className="sub-title">Product Manager</div>
                </div>
                <div className="info">
                  <div className="title">Espera</div>
                  <div className="sub-title">00:31:00</div>
                </div>
                <div className="info">
                  <FontAwesomeIcon icon={faPlay} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="chat-body">
          <div className="chat-header">
            <div className="person-info flex">
              <div>
                <img src={avatar} alt="avatar" />
              </div>
              <div className="title">
                {selectedPerson ? <h1>{selectedPerson.name}</h1> : null}
                <h2>#CU6798H</h2>
              </div>
            </div>
            <div className="action-buttons">
              <FontAwesomeIcon icon={faPhone} />
              <FontAwesomeIcon icon={faVideo} />
              <FontAwesomeIcon icon={faCircleInfo} />
            </div>
          </div>
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${
                  message.sentByUser ? "sent" : "received"
                }`}
              >
                <div className="message-text">{message.text}</div>
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <div>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="chat-input"
              />
              <FontAwesomeIcon className="attach-button" icon={faPaperclip} />
              <FontAwesomeIcon
                onClick={sendMessage}
                className="send-button"
                icon={faPaperPlane}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChatView;
