import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <>
      <section className="hero__section">
        <div className="hero__section-wrapper">
          <div className="about__hero-section">
            <h1>
              I’m Uneeb Bhatti, a UI/UX designer & Front-end Developer based in
              Pakistan. Available for freelance & collaborations.{" "}
            </h1>
          </div>
          <div className="hero__section-img">
            <img src="/img/my-img.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
