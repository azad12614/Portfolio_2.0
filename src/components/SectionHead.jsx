// "01 / about" label over the section title. `id` names the section for screen readers.
const SectionHead = ({ number, label, title, id }) => (
  <div className="sec-head">
    <div className="sec-label">
      {number} / {label}
    </div>
    <h2 id={id}>{title}</h2>
  </div>
);

export default SectionHead;
