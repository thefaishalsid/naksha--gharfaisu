import React from "react";
import "../styles/Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>🏠 Naksha Ghar</h2>
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-social">
          <span>🌐</span>
          <span>💼</span>
          <span>📺</span>
          <span>💼</span>
        </div>

      </div>

      <p className="copyright">
        © 2025 Naksha Ghar. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;