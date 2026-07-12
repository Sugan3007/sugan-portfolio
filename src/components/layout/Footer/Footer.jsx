import "./Footer.css";

import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {

  const scrollTop = () => {

    window.scrollTo({

      top:0,

      behavior:"smooth",

    });

  };

  return (

    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          <div className="footer-brand">

            <h2>

              ⚡ Sugan

            </h2>

            <p>

              Designer • Developer • Editor

            </p>

            <span>

              Turning ideas into digital experiences.

            </span>

          </div>

          <div className="footer-links">

            <h4>

              Quick Links

            </h4>

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#services">Services</a>

            <a href="#skills">Skills</a>

            <a href="#projects">Projects</a>

            <a href="#contact">Contact</a>

          </div>

          <div className="footer-social">

            <h4>

              Connect

            </h4>

            <div>

              <a href="YOUR_GITHUB">

                <FiGithub/>

              </a>

              <a href="YOUR_LINKEDIN">

                <FiLinkedin/>

              </a>

              <a href="YOUR_INSTAGRAM">

                <FiInstagram/>

              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>

            © 2026 Sugantha Balan M.
            All Rights Reserved.

          </p>

          <button
            onClick={scrollTop}
          >

            <FiArrowUp/>

          </button>

        </div>

      </div>

    </footer>

  );

}

export default Footer;