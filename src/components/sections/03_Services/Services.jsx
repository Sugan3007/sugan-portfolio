import "./Services.css";
import services from "../../../data/services";
import { FiArrowUpRight } from "react-icons/fi";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">

        <span className="section-tag">
          MY SERVICES
        </span>

        <h2 className="section-title">
          What I Can Do For You
        </h2>

        <p className="section-description">
          I combine creativity, design and technology to build
          digital experiences that are visually appealing,
          user-friendly and impactful.
        </p>

        <div className="services-grid">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.id}
                className="service-card"
              >

                <div className="service-icon">
                  <Icon />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a
  href={service.driveLink}
  target="_blank"
  rel="noopener noreferrer"
  className="service-footer"
>
  <span>Explore</span>
  <FiArrowUpRight />
</a>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Services;