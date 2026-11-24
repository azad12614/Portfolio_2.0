import { useEffect } from "react";
// Imported in page order: each import brings its CSS, so the cascade keeps the design's order
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ProblemSolving from "../../components/ProblemSolving";
import Awards from "../../components/Awards";
import Blog from "../../components/Blog";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Top from "../../components/Top";
import { IconSprite } from "../../components/Icon";

// A section frame: a full-width rule with square markers on the outer guide lines
const Frame = () => <div className="frame" aria-hidden="true"></div>;

// Fade each section up once, on first view. index.html adds the "js" class only when
// motion is allowed, so with reduced motion everything is simply visible.
function useRevealOnView() {
  useEffect(() => {
    if (!document.documentElement.classList.contains("js")) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

const HomePage = () => {
  useRevealOnView();

  return (
    <>
      <IconSprite />
      <div className="guides" aria-hidden="true">
        <div className="wrap">
          <div className="cols">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Frame />
        <About />
        <Frame />
        <Experience />
        <Frame />
        <Skills />
        <Frame />
        <Projects />
        <Frame />
        <ProblemSolving />
        <Frame />
        <Awards />
        <Frame />
        <Blog />
        <Frame />
        <Contact />
      </main>
      <Frame />
      <Footer />
      <Top />
    </>
  );
};

export default HomePage;
