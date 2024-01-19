import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "@mui/material";
import logo2 from "../../assets/images/logo2.png";
import CaseChat from "../CaseChat/CaseChat";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "./Header2.scss";

const Header2 = () => {
  const [query, setQuery] = useState<string>("");
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query.startsWith("ask/")) {
      setIsChatOpen(true);
    }
  }, [query]);

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <nav className="navbar-container2 flex justify-center">
      <header className="header2 flex justify-around items-center">
        <Link to="/">
          <div className="logo flex justify-center items-center">
            <div className="logo-container">
              <img src={logo2} alt="justiceai" />
            </div>
            <div className="title-container">
              <h5>Justice.AI</h5>
              <p>Legal Services</p>
            </div>
          </div>
        </Link>
        <div className="nav-links2">
          <Link to="/services">
            Services{" "}
            <FontAwesomeIcon className="arrow-down" icon={faChevronDown} />
          </Link>
          <Link to="/consultation">
            Consultation{" "}
            <FontAwesomeIcon className="arrow-down" icon={faChevronDown} />
          </Link>
          <Link to="/personal">
            Personal{" "}
            <FontAwesomeIcon className="arrow-down" icon={faChevronDown} />
          </Link>
          <Link to="/business">
            Business{" "}
            <FontAwesomeIcon className="arrow-down" icon={faChevronDown} />
          </Link>
          <Link to="/aboutus">
            About Us{" "}
            <FontAwesomeIcon className="arrow-down" icon={faChevronDown} />
          </Link>
        </div>
        <div className="search-bar2 flex items-center">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Type here..."
            className="search-input"
          />

          <Modal
            open={isChatOpen}
            onClose={handleCloseChat}
            className="chat-modal"
          >
            <CaseChat />
          </Modal>
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        </div>
        <div className="auth">
          <button>Login</button>
        </div>
      </header>
    </nav>
  );
};

export default Header2;
