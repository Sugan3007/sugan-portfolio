import "./Achievements.css";
import achievements from "../../../data/achievements";

function Achievement() {

  const featured = achievements.find(
    item => item.featured
  );

  const others = achievements.filter(
    item => !item.featured
  );

  const FeaturedIcon = featured.icon;

  return (

    <section
      id="achievements"
      className="achievement"
    >

      <div className="container">

        <span className="section-tag">
          ACHIEVEMENTS
        </span>

        <h2 className="section-title">
          Awards & Recognition
        </h2>

        <p className="section-description">
          Competitions, certifications and milestones that
          reflect my passion for learning, innovation and
          continuous growth.
        </p>

        {/* Featured Achievement */}

        <div className="featured-achievement">

          <div className="featured-icon">

            <FeaturedIcon />

          </div>

          <div className="featured-content">

            <span className="featured-year">

              {featured.year}

            </span>

            <h3>

              {featured.title}

            </h3>

            <p>

              {featured.description}

            </p>

            <div className="featured-badges">

    <span>

        🏆 First Place

    </span>

    <span>

        💰 {featured.prize}

    </span>

    <span>

        📍 {featured.organization}

    </span>

</div>

          </div>

        </div>

        {/* Other Achievements */}

        <div className="achievement-grid">

          {others.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.id}
                className="achievement-card"
              >

                <div className="achievement-icon">

                  <Icon />

                </div>

                <span className="achievement-year">

                  {item.year}

                </span>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.description}

                </p>

                <div className="achievement-tags">

                  <span>{item.organization}</span>

                  <span>{item.prize}</span>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}

export default Achievement;