import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <button className="header__menu" aria-label="Open menu">
          <span className="header__menu-icon">&#9776;</span> MENU
        </button>

        <nav className="header__nav">
          <Link to="/" className="header__nav-link">
            Rooms
          </Link>
          <Link to="/" className="header__nav-link">
            Programs
          </Link>
          <Link to="/" className="header__nav-link">
            Workshop
          </Link>
          <Link to="/" className="header__nav-link">
            Contact
          </Link>
        </nav>

        <div className="header__logo">
          <img src={logo} alt="Repa Retreat Logo" />
        </div>

        <div className="header__language">
          <select name="language" id="language-select">
            <option value="en">En</option>
            <option value="es">Nep</option>
            <option value="fr">Jpn</option>
          </select>
        </div>

        <div className="header__login">
          <Link to="/">JOIN NOW</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
