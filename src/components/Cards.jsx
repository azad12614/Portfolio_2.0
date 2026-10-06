import PropTypes from "prop-types";
import "./Cards.css";
import Icon from "./Icon";

const Cards = ({ item, animateGrid, type }) => {
  const getWorkTypeStatus = (workType) => {
    if (workType.includes("volunteer")) return "warn";
    if (workType.includes("part-time")) return "neutral";
    return "info";
  };

  const getWorkplaceStatus = (workplace) => {
    if (workplace === "remote" || workplace === "online") return "success";
    if (workplace === "hybrid") return "info";
    return "neutral";
  };

  const renderDescription = (text) =>
    text
      .split(/(\*\*[^*]+\*\*)/g)
      .filter(Boolean)
      .map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          part
        )
      );

  return (
    <div className={`experience-card ${animateGrid ? "animate-on-load" : ""}`}>
      <div className="card-glow"></div>

      {/* Card Header */}
      <div className="card-header">
        <div className="tag tag--lg tag--solid">
          <Icon name="calendar" className="type-icon" />
          {item.date}
        </div>
        <div className="work-type-badges">
          {item.worktype && (
            <span
              className={`tag tag--${getWorkTypeStatus(item.worktype.toLowerCase())}`}
            >
              {item.worktype}
            </span>
          )}
          {item.workplace && (
            <span
              className={`tag tag--${getWorkplaceStatus(item.workplace.toLowerCase())}`}
            >
              <span className="workplace-dot"></span>
              {item.workplace}
            </span>
          )}
        </div>
      </div>

      {/* Position Title */}
      <h2 className="position-title">{item.title}</h2>

      {/* Organization */}
      <div className="company-section">
        <h3 className="company-name">
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.org}
            </a>
          ) : (
            item.org
          )}
        </h3>
      </div>

      {/* Description */}
      <div className="card-content">
        <p className="description">{renderDescription(item.desc)}</p>
      </div>

      {/* Additional Info Footer */}
      <div className="card-footer">
        <div className="tag tag--soft">
          {type === "job" && "Professional Experience"}
          {type === "academic" && "Academic Role"}
          {type === "programming" && "Achievement"}
          {type === "education" && "Education"}
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.string,
    worktype: PropTypes.string,
    workplace: PropTypes.string,
    title: PropTypes.string,
    org: PropTypes.string,
    link: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
  animateGrid: PropTypes.bool,
  type: PropTypes.oneOf(["job", "academic", "programming", "education"]),
};

export default Cards;
