import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFile,
  faFolder,
  faUser,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [burgerMenuClass, SetBurgerMenuClass] = useState(
    "header__nav--list clicked"
  );
  const [itemBarsClass, setItemBarsClass] = useState(
    "header__responsive--bars hidden"
  );
  const [itemXClass, setItemXClass] = useState("header__responsive--X visible");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!isClicked) {
      SetBurgerMenuClass("header__nav--list unclicked");
      setItemBarsClass("header__responsive--bars visible");
      setItemXClass("header__responsive--X hidden");
    } else {
      SetBurgerMenuClass("header__nav--list clicked");
      setItemBarsClass("header__responsive--bars hidden");
      setItemXClass("header__responsive--X visible");
    }
  }, [isClicked]);

  const [headerClass, setHeaderClass] = useState(false);
  const [iconClass, setIconClass] = useState(true);

  const changeCondition = () => {
    window.scrollY > 50 ? setHeaderClass(true) : setHeaderClass(false);
    window.scrollY > 50 ? setIconClass(true) : setIconClass(false);
  };
  window.addEventListener("scroll", changeCondition);

  return (
    <header className={headerClass ? "header active" : "header"}>
      <div className="header-logo">ALB</div>
      <nav className="header__nav">
        <ul className={burgerMenuClass}>
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
      <div className="header__responsive">
        <span id={iconClass ? "icon-bars-activated" : ""} className={itemBarsClass}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              setIsClicked(true);
            }}
          />
        </span>
        <span className={itemXClass}>
          <FontAwesomeIcon
            icon={faX}
            onClick={() => {
              setIsClicked(false);
            }}
          />
        </span>
      </div>
    </header>
  );
};

export default Header;
