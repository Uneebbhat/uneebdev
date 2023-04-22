import React, { useState, useEffect } from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

export default function Navbar() {
  const [mobileNavTop, setMobileNavTop] = useState(-1000);
  const [icon, setIcon] = useState("/img/menu.svg");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    if (mobileNavTop === -1000) {
      setMobileNavTop(100);
      setIcon("/img/close.svg");
      document.body.style.overflow = "hidden";
    } else {
      setMobileNavTop(-1000);
      setIcon("/img/menu.svg");
      document.body.style.overflow = "auto";
    }
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    // add or remove body style based on mobileNavTop value
    if (mobileNavTop === 100) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileNavTop]);

  return (
    <>
      <nav className="navbar flex">
        <div className="logo">
          <a href="/">
            <img src="/img/logo.svg" alt="uneeb.dev" />
          </a>
        </div>

        {
          <div className="nav__links">
            <ul className="nav__ul flex">
              {/* <li>
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li> */}
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        }

        <div className="ham" onClick={toggleMobileNav}>
          <img src={icon} alt="" />
        </div>
      </nav>

      <div className="mobile__nav" style={{ top: mobileNavTop }}>
        {
          <div className="mobile__nav-links">
            <ul className="mobile__nav-ul">
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        }
      </div>
    </>
  );
}
