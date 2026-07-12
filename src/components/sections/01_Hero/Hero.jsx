import "./Hero.css";
import { useEffect, useRef, useState } from "react";
import Counter from "../../common/Counter/Counter";

function Hero() {
  /* =========================
     Availability Badge
  ========================= */

  const availability = [
    "Available for Internship",
    "Available for Freelance",
  ];

  const [currentStatus, setCurrentStatus] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentStatus((prev) => (prev + 1) % availability.length);
        setFade(true);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  /* =========================
     Animated Roles
  ========================= */

  const roles = [
    "Professional Editor",
    "Graphic Designer",
    "UI / UX Designer",
    "Logo Designer",
    "Web Developer",
    "App Developer",
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [roleFade, setRoleFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleFade(false);

      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setRoleFade(true);
      }, 450);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  /* =========================
     Mouse Glow
  ========================= */

  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();

    heroRef.current.style.setProperty(
      "--x",
      `${e.clientX - rect.left}px`
    );

    heroRef.current.style.setProperty(
      "--y",
      `${e.clientY - rect.top}px`
    );
  };

  /* =========================
     Stats
  ========================= */

 const stats = [
  {
    end: 3,
    suffix: "+",
    title: "Projects",
  },

  {
    end: 25,
    suffix: "+",
    title: "Certificates",
  },

  {
    end: 2,
    suffix: "",
    title: "Awards",
  },

  {
    end: 15,
    suffix: "+",
    title: "Skills",
  },
];

  return (
    <section
      id="home"
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>

      <div className="container hero-container">

        {/* Badge */}
        <div className={`hero-badge ${fade ? "show" : "hide"}`}>
          <span className="status-dot"></span>
          {availability[currentStatus]}
        </div>

        {/* Greeting */}
        <span className="hero-greeting">
          HELLO, I'M
        </span>

        {/* Name */}
        <h1 className="hero-title">
          Sugantha <br />
          Balan <span>M</span>
        </h1>

        {/* Animated Role */}
        <div className="hero-role-wrapper">
          <span className={`hero-role ${roleFade ? "show" : "hide"}`}>
            {roles[currentRole]}
          </span>
        </div>

        {/* Description */}
        <p className="hero-description">
          Passionate about creating modern digital experiences
          through graphic design, UI/UX, web development and
          creative storytelling.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Hire Me
          </a>

          <a
            href="/resume.pdf"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {stats.map((item) => (
            <div
              key={item.title}
              className="hero-stat-card"
            >
             <h3>

  {item.text ? (

    item.text

  ) : (

    <Counter

      end={item.end}

      suffix={item.suffix}

    />

  )}

</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <span></span>
          </div>

          <p>Scroll Down</p>
        </div>

      </div>
    </section>
  );
}

export default Hero;