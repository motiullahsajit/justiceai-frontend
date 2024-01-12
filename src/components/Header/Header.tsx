import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/logo.png";
import "./Header.scss";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="navbar-container flex justify-center">
      <header className="header flex justify-around items-center">
        <div className="logo flex justify-center items-center">
          <div className="logo-container">
            <img src={logo} alt="justiceai" />
          </div>
          <div className="title-container">
            <h5>Justice.AI</h5>
            <p>Legal Services</p>
          </div>
        </div>
        <div className="nav-links">
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
        <div className="search-bar flex items-center">
          <input
            type="search"
            className="search-input"
            placeholder="Stakeholders took my share"
          />
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        </div>
        <div className="auth">
          <button>Login</button>
        </div>
      </header>
    </nav>
  );
};

export default Header;
