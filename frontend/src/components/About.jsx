import { useState } from "react";
import "../styles/About.css";
import aboutImg from "../assets/home1.png";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <div className="about-image">
          <img src={aboutImg} alt="About Us" />
        </div>

        <div className="about-content">
          <h2>About Us</h2>

          <p>
           Naksha Ghar is a trusted name in architectural planning and construction design, founded by Engineer Gulam Mohammad. With a vision to turn ideas into reality, we specialize in creating smart, modern, and sustainable building designs that match your dreams and budget.
          </p>

          {/* Ye content tabhi dikhega jab button click hoga */}
          {showMore && (
            <>
              <p>
                At Naksha Ghar, we believe that every home tells a story. From 2D & 3D elevation designs to structural planning and project supervision, we focus on quality, precision, and innovation in every detail. Our goal is not just to design buildings, but to build trust and long-lasting relationships with our clients.
              </p>

              <p>
                With technical expertise and practical experience, Engineer Gulam Mohammad ensures that every project is planned with safety, efficiency, and modern aesthetics in mind. Whether it’s a residential home or a commercial project, we are committed to delivering excellence at every step.
              </p>
            </>
          )}

          <button
            className="about-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Learn More"}
          </button>
        </div>

      </div>
    </section>
  );
}