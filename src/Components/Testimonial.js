import React from "react";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <>
      <section className="testimonial">
        <div className="testimonial__section-wrapper">
          <div className="testimonial__heading">
            <h2>What Client Say</h2>
          </div>

          <div className="testimonials">
            <p>
              "Uneeb did an excellent job building my portfolio website as a
              UI/UX designer. He created a visually appealing and user-friendly
              website that perfectly represents my skills and experience. His
              communication and professionalism throughout the process were
              outstanding. I highly recommend Uneeb to anyone looking to build a
              professional website. Thank you, Uneeb!"
              <br />
              <br />- Talha Khan Niazi
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
