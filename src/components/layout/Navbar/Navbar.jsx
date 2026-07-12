import "./Navbar.css";

import { useState } from "react";

import { navLinks } from "../../../data/navigation";

import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { HiBolt } from "react-icons/hi2";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-wrapper">

        <div className="container navbar-container">

          {/* ================= Logo ================= */}

          <a
            href="#home"
            className="navbar-logo"
            onClick={closeMenu}
          >

            <div className="navbar-logo-box">
              <HiBolt />
            </div>

            <span>Sugan</span>

          </a>

          {/* ================= Navigation ================= */}

          <nav
            className={`navbar-nav ${
              menuOpen ? "active" : ""
            }`}
          >

            {navLinks.map((item) => (

              <a
                key={item.name}
                href={item.href}
                className="navbar-link"
                onClick={closeMenu}
              >
                {item.name}
              </a>

            ))}

            {/* Mobile Social */}

            <div className="navbar-social mobile-social">

              <a
                href="https://github.com/Sugan3007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sugantha-balan-m-0630a9357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>

              <a
                href="https://www.instagram.com/classy_sugan_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>

            </div>

          </nav>

          {/* ================= Desktop Social ================= */}

          <div className="navbar-social desktop-social">

            <a
              href="https://github.com/Sugan3007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sugantha-balan-m-0630a9357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>

            <a
              href="https://www.instagram.com/classy_sugan_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </a>

          </div>

          {/* ================= Mobile Toggle ================= */}

          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >

            {menuOpen ? <FiX /> : <FiMenu />}

          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;