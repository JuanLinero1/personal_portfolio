import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFile,
  faFolder,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [headerClass, setHeaderClass] = useState(false);

  const changeCondition = () => {
    window.scrollY > 50 ? setHeaderClass(true) : setHeaderClass(false);
  };
  window.addEventListener("scroll", changeCondition);

  return (
    <header className={headerClass ? "header active" : "header"}>
      <div className="header-logo">ALB</div>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <a href="/">
            <li className="header__nav--list-item">
              <FontAwesomeIcon icon={faHouse} />
              Home
            </li>
          </a>
          <a href="/About">
            <li className="header__nav--list-item">
              <FontAwesomeIcon icon={faUser} />
              About
            </li>
          </a>
          <a href="/Project">
            <li className="header__nav--list-item">
              <FontAwesomeIcon icon={faFolder} />
              Project
            </li>
          </a>
          <a href="/Resume">
            <li className="header__nav--list-item">
              <FontAwesomeIcon icon={faFile} />
              Resume
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
