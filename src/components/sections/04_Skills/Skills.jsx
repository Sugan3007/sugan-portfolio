import "./Skills.css";
import { useState } from "react";
import skills from "../../../data/skills";

function Skills() {
  const [activeTab, setActiveTab] = useState(skills[0].id);
  const [visible, setVisible] = useState(true);

  const activeCategory = skills.find(
    (category) => category.id === activeTab
  );

  const handleTabChange = (id) => {
    if (id === activeTab) return;

    setVisible(false);

    setTimeout(() => {
      setActiveTab(id);
      setVisible(true);
    }, 250);
  };

  return (
    <section id="skills" className="skills">
      <div className="container">

        {/* Heading */}

        <span className="section-tag">
          MY SKILLS
        </span>

        <h2 className="section-title">
          Technologies & Creative Tools
        </h2>

        <p className="section-description">
          I combine development, design, editing and creative
          problem-solving to build modern digital experiences
          that are functional, visually engaging and user focused.
        </p>

        {/* Tabs */}

        <div className="skills-tabs">

          {skills.map((category) => (

            <button
              key={category.id}
              className={`skills-tab ${
                activeTab === category.id ? "active" : ""
              }`}
              onClick={() => handleTabChange(category.id)}
            >
              {category.title}
            </button>

          ))}

        </div>

        {/* Grid */}

        <div
          className={`skills-grid ${
            visible ? "show" : "hide"
          }`}
        >

          {activeCategory.items.map((skill) => {

            const Icon = skill.icon;

            return (

              <div
                key={skill.name}
                className="skill-card"
              >

                {Icon && (

                  <div
                    className="skill-icon"
                    style={{
                      color:
                        skill.color || "var(--primary)",
                    }}
                  >
                    <Icon />
                  </div>

                )}

                <h3>{skill.name}</h3>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Skills;