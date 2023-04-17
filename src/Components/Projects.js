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
              <div className="project__one">
                <h2>talhakhandesigns</h2>
                <img src="/img/portfolio-1.svg" alt="" />
              </div>
              <div className="project__two">
                <h2>Bookmark</h2>
                <img src="/img/portfolio-2.svg" alt="" />
              </div>
              <div className="project__three">
                <h2>Discord</h2>
                <img src="/img/portfolio-3.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
