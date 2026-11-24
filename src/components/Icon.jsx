// One SVG sprite for the whole page: icons (i-*) and contest chart marks (m-*).
// Render <IconSprite /> once; <Icon name="gh" /> and <Mark type="icpc" /> point into it.
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="i-gh" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 .5a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
        />
      </symbol>
      <symbol id="i-in" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9Z"
        />
      </symbol>
      <symbol id="i-fb" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14 8V6.5c0-.8.2-1.5 1.5-1.5H17V2h-2.6C11.5 2 10.6 3.8 10.6 6.3V8H8.5v3h2.1v11H14V11h2.6l.4-3H14Z"
        />
      </symbol>
      <symbol id="i-copy" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" d="M9 9h11v11H9zM5 15H4V4h11v1" />
      </symbol>
      <symbol id="i-ext" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6" />
      </symbol>
      <symbol id="i-sun" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </g>
      </symbol>
      <symbol id="i-moon" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
      </symbol>
      <symbol id="i-menu" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
      </symbol>
      <symbol id="i-x" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" d="M6 6l12 12M18 6 6 18" />
      </symbol>
      <symbol id="i-up" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" d="M12 19V5M6 11l6-6 6 6" />
      </symbol>
      <symbol id="m-icpc" viewBox="0 0 12 12">
        <path d="M6 1 11 6 6 11 1 6Z" />
      </symbol>
      <symbol id="m-ncpc" viewBox="0 0 12 12">
        <rect x="1.5" y="1.5" width="9" height="9" />
      </symbol>
      <symbol id="m-inter" viewBox="0 0 12 12">
        <circle cx="6" cy="6" r="4.5" />
      </symbol>
      <symbol id="m-intra" viewBox="0 0 12 12">
        <path d="M6 1.5 11 10.5H1Z" />
      </symbol>
    </svg>
  );
}

// Decorative by default: the control that holds the icon carries the accessible name
export function Icon({ name, size }) {
  return (
    <svg width={size} height={size} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

export function Mark({ type, style }) {
  return (
    <svg aria-hidden="true" style={style}>
      <use href={`#m-${type}`} />
    </svg>
  );
}
