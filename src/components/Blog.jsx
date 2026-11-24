import { useEffect, useRef, useState } from "react";
import { posts } from "../data/blog";
import "./Blog.css";
import { Icon } from "./Icon";
import SectionHead from "./SectionHead";

const FADE_MS = 160;

// The large image follows the hovered or focused row, with a short fade (none when motion is reduced)
const Blog = () => {
  const [active, setActive] = useState(0);
  const [shownImage, setShownImage] = useState(posts[0].image);
  const [fading, setFading] = useState(false);
  const timer = useRef(null);

  const activate = (i) => {
    setActive(i);
    const next = posts[i].image;
    if (next === shownImage) return;
    clearTimeout(timer.current);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShownImage(next);
      return;
    }
    setFading(true);
    timer.current = setTimeout(() => {
      setShownImage(next);
      setFading(false);
    }, FADE_MS);
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <section id="blog" aria-labelledby="blog-h">
      <div className="wrap reveal">
        <SectionHead number="07" label="blog" title="Blog" id="blog-h" />
        <div className="blog">
          <div className="blog-img glass">
            <img src={shownImage} alt="" style={{ opacity: fading ? 0 : 1 }} />
          </div>
          <div>
            <ul className="posts">
              {posts.map((p, i) => (
                <li
                  key={p.url}
                  className={`post glass hoverable${i === active ? " active" : ""}`}
                  onMouseEnter={() => activate(i)}
                  onFocus={() => activate(i)}
                >
                  <a href={p.url}>
                    <time>{p.date}</time>
                    <h3>{p.title}</h3>
                    <p>{p.summary}</p>
                  </a>
                </li>
              ))}
            </ul>
            <a className="btn all-posts" href="https://machineofmind.blogspot.com/">
              All posts <Icon name="ext" size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
