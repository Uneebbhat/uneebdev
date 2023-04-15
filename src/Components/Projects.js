import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <section className="project">
        <div className="project__section-wrapper">
          <div className="project__heading">
            <h2>Projects</h2>
          </div>
          <div className="projects__catalogue">
            <div className="catalogue__wrapper">
              <img src="/img/portfolio-1.svg" alt="" />
              <img src="/img/portfolio-2.svg" alt="" />
              <img src="/img/portfolio-3.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
