import { NavLink, Link } from "react-router-dom";
import React, { useState } from "react";
import "../css/Navbar.css";
import logo from "../img/logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
  const handleClickMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <div className="box">
        <div className="nav">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
            <p className="logo-size">
              {" "}
              <span className="color-logo">R</span>ent
              <span className="color-logo">C</span>ars
            </p>
          </Link>
          {isActive ? (
            <button className="btn active1" onClick={handleClickMenu}>
              {" "}
              <FaBars />
            </button>
          ) : (
            <button onClick={handleClickMenu} className="btn active1">
              {" "}
              <FaXmark />{" "}
            </button>
          )}
        </div>
        <div className="navbar">
          <nav className={isActive ? "hidden" : "nav-mobile"}>
            <ul>
              <li>
                <NavLink onClick={handleClickMenu} to="/">
                  Strona główna
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClickMenu} to="/cars">
                  Nasze pojazdy
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClickMenu} to="/contact">
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
