import { lazy, Suspense, useEffect } from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Project from "../../components/Project";
import Sidebar from "../../components/Sidebar";
import Top from "../../components/Top";
import Resume from "../Resume";

// Awards and Blog use Swiper and sit below the fold, so they load after the first paint.
const loadAwards = () => import("../../components/Awards");
const loadBlog = () => import("../../components/Blog");
const Awards = lazy(loadAwards);
const Blog = lazy(loadBlog);

const HomePage = () => {
  // Start both downloads once the browser is idle, so an anchor link finds the section ready.
  useEffect(() => {
    const preload = () => {
      loadAwards();
      loadBlog();
    };
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(preload);
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(preload, 1500);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <About></About>
        <Resume></Resume>
        <Project></Project>
        {/* The placeholders keep the anchor ids and the page height while a chunk loads. */}
        <Suspense
          fallback={<div id="Awards" style={{ minHeight: "71rem" }} aria-busy="true"></div>}
        >
          <Awards></Awards>
        </Suspense>
        <Suspense
          fallback={<div id="Blog" style={{ minHeight: "55rem" }} aria-busy="true"></div>}
        >
          <Blog></Blog>
        </Suspense>
        <Contact></Contact>
      </main>
      <Footer></Footer>
      <Sidebar></Sidebar>
      <Top></Top>
    </div>
  );
};

export default HomePage;
