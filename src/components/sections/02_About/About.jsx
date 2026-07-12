import "./About.css";
import profile from "../../../assets/images/profile/profile.png";;

function About() {
  return (
    <section id="about" className="about">

      <div className="container about-container">

        {/* Left Side */}

        <div className="about-image">

          <div className="about-image-card">

            <img
              src={profile}
              alt="Sugantha Balan M"
            />

          </div>
          <div className="about-award">

    🏆 Appathon Winner

</div>

        </div>

        {/* Right Side */}

        <div className="about-content">

          <span className="section-tag">
            ABOUT ME
          </span>

          <h2>
            Turning ideas into
            <span> digital experiences.</span>
          </h2>

          <h3>
            Sugantha Balan M
          </h3>

          <h4>
            B.Tech Information Technology
          </h4>

          <p>
            I'm a passionate Information Technology student who enjoys
            combining creativity with technology. My expertise spans
            UI/UX Design, Graphic Design, Logo Design, Video Editing,
            Web Development and App Development. I believe every great
            product starts with a great user experience.
          </p>

          <div className="about-info">

            <div>

              <span>Name</span>

              <h5>Sugantha Balan M</h5>

            </div>

            <div>

              <span>Education</span>

              <h5>B.Tech Information Technology</h5>

            </div>

            <div>

              <span>Location</span>

              <h5>Tamil Nadu, India</h5>

            </div>

            <div>

              <span>Languages</span>

              <h5>Tamil • English</h5>

            </div>

          </div>

          <a
            href="/resume.pdf"
            className="about-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;