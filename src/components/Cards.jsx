import "./Cards.css";

const Cards = ({ item, animateGrid, type }) => {
  const getTypeIcon = () => {
    switch (type) {
      case "job":
        return "💼";
      case "academic":
        return "👨🏻‍🎓";
      case "programming":
        return "🏆";
      case "education":
        return "🎓";
      default:
        return "📌";
    }
  };

  const getWorkTypeColor = (workType) => {
    const colors = {
      intern: "var(--text-accent)",
      parttime: "var(--primary)",
      fulltime: "var(--highlight)",
      volunteer: "var(--info)",
    };
    return colors[workType] || "var(--text-muted)";
  };

  const getWorkplaceColor = (workplace) => {
    const colors = {
      remote: "var(--text-main)",
      onsite: "var(--primary)",
      hybrid: "var(--text-accent)",
      online: "var(--success)",
      offline: "var(--text-muted)",
    };
    return colors[workplace] || "var(--text-muted)";
  };

  return (
    <div className={`experience-card ${animateGrid ? "animate-on-load" : ""}`}>
      <div className="card-glow"></div>

      {/* Card Header */}
      <div className="card-header">
        <div className="date-badge">
          <span className="type-icon">{getTypeIcon()}</span>
          {item.date}
        </div>
        <div className="work-type-badges">
          {item.worktype && (
            <span
              className="work-type-badge"
              style={{ color: getWorkTypeColor(item.worktype.toLowerCase()) }}
            >
              {item.worktype}
            </span>
          )}
          {item.workplace && (
            <span
              className="workplace-badge"
              style={{ color: getWorkplaceColor(item.workplace.toLowerCase()) }}
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
        <p className="description">{item.desc}</p>
      </div>

      {/* Additional Info Footer */}
      <div className="card-footer">
        <div className="experience-tag">
          {type === "job" && "Professional Experience"}
          {type === "academic" && "Academic Role"}
          {type === "programming" && "Achievement"}
          {type === "education" && "Education"}
        </div>
      </div>
    </div>
  );
};

export default Cards;
