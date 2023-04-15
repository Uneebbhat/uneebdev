import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar flex">
        <div className="logo">
          <a href="/">
            <img src="/img/logo.svg" alt="uneeb.dev" />
          </a>
        </div>
        <div className="nav__links">
          <ul className="nav__ul flex">
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="ham">
          <img src="/img/menu.svg" alt="" />
        </div>
      </nav>

      <div className="mobile__nav">
        <div className="mobile__nav-links">
          <ul className="mobile__nav-ul">
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
