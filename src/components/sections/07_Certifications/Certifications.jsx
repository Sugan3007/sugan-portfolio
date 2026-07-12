import "./Certifications.css";
import { useState } from "react";
import certificates from "../../../data/certificates";
import { FiArrowUpRight } from "react-icons/fi";

function Certification() {

  const categories = [
    "All",
    "Development",
    "AI & Data",
    "Design",
    "Editing",
    "Professional",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCertificates =
    activeCategory === "All"
      ? certificates
      : certificates.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section id="certifications" className="certification">

      <div className="container">

        <span className="section-tag">
          CERTIFICATIONS
        </span>

        <h2 className="section-title">
          Continuous Learning & Professional Growth
        </h2>

        <p className="section-description">
          Every certification reflects my commitment to learning,
          improving my skills and staying updated with modern
          technologies and industry practices.
        </p>

        {/* Filter */}

        <div className="certificate-filter">

          {categories.map((category) => (

            <button
              key={category}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Cards */}

        <div className="certificate-grid">

          {filteredCertificates.map((certificate) => {

            const Icon = certificate.icon;

            return (

              <div
                key={certificate.id}
                className="certificate-card"
              >

                <div className="certificate-icon">

                  <Icon />

                </div>

                <span className="certificate-category">

                  {certificate.category}

                </span>

                <h3>

                  {certificate.title}

                </h3>

                <p>

                  {certificate.organization}

                </p>

                <div className="certificate-footer">

  <span>{certificate.year}</span>

 <a
  href={certificate.driveLink}
  target="_blank"
  rel="noopener noreferrer"
  className="certificate-btn"
>

  View Certificate

  <FiArrowUpRight />

</a>
</div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Certification;