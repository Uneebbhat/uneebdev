import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <section className="about">
        <div className="about__section-wrapper">
          <div className="about__heading">
            <h2>About Me</h2>
          </div>

          <div className="about__details">
            <p>
              My skillset lies on creating beautiful web design & make them live
              with the power of code to deliver the full online experience for
              new and also veteran businesses.
              <br />
              <br />
              I'm passionate about giving back and teaching what I know to the
              next generation of developers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
