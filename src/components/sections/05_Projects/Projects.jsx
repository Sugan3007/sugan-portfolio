import "./Projects.css";
import projects from "../../../data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="container">

        <span className="section-tag">
          MY PROJECTS
        </span>

        <h2 className="section-title">
          Featured Projects
        </h2>

        <p className="section-description">
          A collection of projects that showcase my passion for
          development, design and solving real-world problems.
        </p>

       <div className="featured-project">

  <div className="featured-image">

    <span className="featured-badge">
      ⭐ Featured Project
    </span>

    <img
      src={projects[0].image}
      alt={projects[0].title}
    />

  </div>

  <div className="featured-content">

    <span className="project-category">
      {projects[0].category}
    </span>

    <h3>{projects[0].title}</h3>

    <p>{projects[0].description}</p>

    <div className="project-tech">

      {projects[0].technologies.map((tech) => (

        <span key={tech}>{tech}</span>

      ))}

    </div>

    <div className="project-links">

      <a href={projects[0].github}>
        <FiGithub />
        GitHub
      </a>

      <a href={projects[0].live}>
        <FiExternalLink />
        Live Demo
      </a>

    </div>

  </div>

</div>

<div className="projects-grid">

  {projects.slice(1).map((project) => (

    <div
      key={project.id}
      className="project-card"
    >

      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>

      <div className="project-content">

        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">

          {project.technologies.map((tech) => (

            <span key={tech}>{tech}</span>

          ))}

        </div>

        <div className="project-links">

         <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
>
            <FiGithub />
            GitHub
          </a>

         <a
  href={project.live}
  target="_blank"
  rel="noopener noreferrer"
  className={project.live === "#" ? "disabled-link" : ""}
  onClick={(e) => {
    if (project.live === "#") {
      e.preventDefault();
    }
  }}
>
            <FiExternalLink />
            Live Demo
          </a>

        </div>

      </div>

    </div>

  ))}

</div>

      </div>

    </section>
  );
}

export default Projects;