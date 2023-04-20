import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <small>@2023 Juan Linero. All rights reserved.</small>
      <ul className="footer--list">
        <li className="footer--list-item">
        <a target="_blank" href="https://github.com/JuanLinero1">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="footer--list-item">
        <a target="_blank" href="https://www.linkedin.com/in/juan-linero-99b714221">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
