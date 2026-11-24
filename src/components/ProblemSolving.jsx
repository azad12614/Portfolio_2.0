import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { contests, lanes, platforms, yearStarts } from "../data/solving";
import { Icon, Mark } from "./Icon";
import "./ProblemSolving.css";
import SectionHead from "./SectionHead";

const LANE_H = 72;
const TOP = 30;
const POP_W = 300;
const laneName = Object.fromEntries(lanes.map((l) => [l.type, l.name]));
const laneIndex = Object.fromEntries(lanes.map((l, i) => [l.type, i]));
const maxSolved = Math.max(...platforms.map((p) => p.solved));

// Marks are spread evenly, so contests in the same month never overlap
const xPct = (i) => 3 + i * (94 / (contests.length - 1));
const laneY = (type) => TOP + laneIndex[type] * LANE_H + LANE_H / 2;
const rankText = (c) => `Ranked ${c.rank}${c.honorableMention ? " · Honorable Mention" : ""}`;

const ContestFacts = ({ contest: c }) => (
  <>
    <p>
      {c.date} · {c.org} · {c.mode}
    </p>
    {c.team && (
      <p>
        Team {c.team}
        {c.mates && ` with ${c.mates.join(" and ")}`}
      </p>
    )}
    {c.standings && (
      <a href={c.standings}>
        Standings <Icon name="ext" size={12} />
      </a>
    )}
  </>
);

// Desktop: 4 lanes, one mark per contest. Hover or focus previews, click pins (so the link works).
const ContestChart = () => {
  const [shown, setShown] = useState(null);
  const [pinned, setPinned] = useState(null);
  const plotRef = useRef(null);
  const popRef = useRef(null);
  const markRefs = useRef([]);
  const hideTimer = useRef(null);

  const preview = (i) => {
    clearTimeout(hideTimer.current);
    if (pinned === null) setShown(i);
  };
  const softHide = () => {
    if (pinned === null) hideTimer.current = setTimeout(() => setShown(null), 140);
  };
  const toggle = (i) => {
    clearTimeout(hideTimer.current);
    if (pinned === i) {
      setPinned(null);
      setShown(null);
    } else {
      setPinned(i);
      setShown(i);
    }
  };

  // Place the box under its mark, inside the plot; open above when it would run past the bottom
  useLayoutEffect(() => {
    if (shown === null) return;
    const pop = popRef.current;
    const plot = plotRef.current;
    const mark = markRefs.current[shown];
    const left = Math.max(0, Math.min(plot.clientWidth - POP_W, mark.offsetLeft - POP_W / 2));
    const below = mark.offsetTop + 26;
    const fitsBelow = below + pop.offsetHeight <= plot.clientHeight;
    pop.style.left = `${left}px`;
    // above: clear the mark's rank label
    pop.style.top = `${fitsBelow ? below : mark.offsetTop - 40 - pop.offsetHeight}px`;
  }, [shown]);

  useEffect(() => {
    if (shown === null) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (pinned !== null) markRefs.current[pinned].focus();
      setPinned(null);
      setShown(null);
    };
    const onClick = (e) => {
      if (pinned !== null && !e.target.closest(".cpt") && !e.target.closest(".cpop")) {
        setPinned(null);
        setShown(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [shown, pinned]);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  const c = shown === null ? null : contests[shown];

  return (
    <div className="cchart only-desktop">
      <div className="c-lanes">
        {lanes.map((l) => (
          <span key={l.type}>{l.name}</span>
        ))}
      </div>
      <div className="cplot" ref={plotRef}>
        {lanes.map((l) => (
          <div key={l.type} className="lane" style={{ top: laneY(l.type) }}></div>
        ))}
        <div className="axis"></div>
        {yearStarts.map((y) => (
          <span key={y.year} className="year" style={{ left: `calc(${xPct(y.index)}% - 12px)` }}>
            {y.year}
          </span>
        ))}
        {/* A plain box, not a dialog: focus stays on the mark, whose label already names the contest */}
        <div
          ref={popRef}
          id="cpop"
          className={c ? "cpop show" : "cpop"}
          onMouseEnter={() => clearTimeout(hideTimer.current)}
          onMouseLeave={softHide}
        >
          {c && (
            <>
              <div className={c.honorableMention ? "p-rank hm" : "p-rank"}>{rankText(c)}</div>
              <h4>{c.name}</h4>
              <ContestFacts contest={c} />
            </>
          )}
        </div>
        {contests.map((contest, i) => (
          <button
            key={contest.name}
            ref={(el) => (markRefs.current[i] = el)}
            className={contest.honorableMention ? "cpt hm" : "cpt"}
            type="button"
            aria-expanded={shown === i}
            aria-controls="cpop"
            aria-label={`${contest.name}, ${contest.date}, ${rankText(contest)}`}
            style={{ left: `${xPct(i)}%`, top: laneY(contest.type) }}
            onMouseEnter={() => preview(i)}
            onMouseLeave={softHide}
            onFocus={() => preview(i)}
            onBlur={softHide}
            onClick={() => toggle(i)}
          >
            <span className="rk" aria-hidden="true">
              {contest.rank}
            </span>
            <Mark type={contest.type} />
          </button>
        ))}
      </div>
    </div>
  );
};

const markLegendStyle = { fill: "none", stroke: "var(--cyan)", strokeWidth: 1.5 };

const ProblemSolving = () => {
  return (
    <section id="solving" aria-labelledby="ps-h">
      <div className="wrap reveal">
        <SectionHead number="05" label="problem solving" title="Problem solving" id="ps-h" />
        <div className="ps-grid">
          <div className="ps-card glass">
            <h3>Problems solved</h3>
            <p className="sub">Peak rating and rank on each platform</p>
            <ul className="bars">
              {platforms.map((p) => (
                <li key={p.name}>
                  <div className="row">
                    <span>{p.name}</span>
                    <b>{p.label}</b>
                  </div>
                  <div className="track" aria-hidden="true">
                    <div className="fill" style={{ width: `${((p.solved / maxSolved) * 100).toFixed(1)}%` }}></div>
                  </div>
                  <div className="lbl">{p.detail}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="ps-card glass">
            <h3>Contests, 2022 to 2024</h3>
            <p className="sub">{contests.length} contests in date order. Hover, focus or click a mark for details.</p>
            <ul className="legend" aria-hidden="true">
              {lanes.map((l) => (
                <li key={l.type}>
                  <Mark type={l.type} style={markLegendStyle} />
                  {l.name}
                </li>
              ))}
            </ul>
            <ContestChart />
            {/* Phones: a list, newest first; tap a row for its details */}
            <ol className="contest-list only-phone" aria-label="Contest results, newest first">
              {contests
                .slice()
                .reverse()
                .map((contest) => (
                  <li key={contest.name} className={contest.honorableMention ? "hm" : undefined}>
                    <details>
                      <summary>
                        <Mark type={contest.type} />
                        <span>
                          <span className="c-name">{contest.name}</span>
                          <span className="c-date">
                            {contest.date} · {laneName[contest.type]}
                          </span>
                        </span>
                        <span className="c-rank">
                          {contest.rank}
                          {contest.honorableMention && " · HM"}
                        </span>
                      </summary>
                      <div className="c-more">
                        <p>{rankText(contest)}</p>
                        <ContestFacts contest={contest} />
                      </div>
                    </details>
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
