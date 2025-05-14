import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>
          Saving lives.    </p>
      </section>

      <section className="about-content">
        <div className="mission">
          <h2>Our Mission</h2>
        </div>

        <div className="vision">
          <h2>Our Vision</h2>
        </div>

        <div className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="path-to-image-1" alt="Founder" />
              <h3>Jane Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="path-to-image-2" alt="Co-Founder" />
              <h3>John Smith</h3>
              <p>Co-Founder & Operations Lead</p>
            </div>
            <div className="team-member">
              <img src="path-to-image-3" alt="Marketing Head" />
              <h3>Emily Davis</h3>
              <p>Head of Marketing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Join Us in Saving Lives</h2>
        <p>
          Whether you're a donor, volunteer, or advocate, you can help us
          achieve our mission. Together, we can make sure that no one has to
          wait for the blood they need. Become a part of our community today.
        </p>
        <a href="/donate" className="donate-link">
          Become a Donor
        </a>
      </section>
    </div>
  );
}

export default AboutUs;
