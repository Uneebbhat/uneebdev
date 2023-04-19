import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__section-wrapper">
          <div className="left__side">
            <img src="/img/logo.svg" alt="" />
          </div>
          {/* <div className="right__side">
            <img src="/img/facebook.svg" alt="" />
            <img src="/img/instagram.svg" alt="" />
          </div> */}
        </div>
      </footer>
    </>
  );
}
