import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="contact__section-wrapper">
          <div className="contact__heading">
            <h2>Say Hello</h2>
          </div>

          <div className="about__contact">
            <p>
              Looking to start a new project or just want to say hi? Send me an
              email or book a free meeting with me and I'll do my best to reply
              within 24 hrs! <br /> <br />
              <p>uneebbhatti3@gmail.com</p>
              <br />
              <a href="https://calendly.com/uneebdev/30min" target="_blank">
                <button className="btn">Book a call</button>
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
