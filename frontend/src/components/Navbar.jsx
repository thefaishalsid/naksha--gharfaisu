import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });

    // mobile menu close after click
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <h2 className="logo">🏠Naksha Ghar</h2>

      {/* NAV LINKS */}

      <div className={menuOpen ? "nav-links active" : "nav-links"}>

        <button onClick={() => scrollToSection("home")}>Home</button>

        <button onClick={() => scrollToSection("services")}>
          Services
        </button>

        <button onClick={() => scrollToSection("about")}>
          About Us
        </button>

        <button onClick={() => scrollToSection("contact")}>
          Contact Us
        </button>

        {/* LOGIN inside menu for mobile */}

        <button
          className="login-btn mobile-login"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

      </div>

      {/* DESKTOP LOGIN */}

      <button
        className="login-btn desktop-login"
        onClick={() => navigate("/login")}
      >
        Login
      </button>

      {/* HAMBURGER MENU */}

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </nav>
  );
}