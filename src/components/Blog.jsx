import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Blog.css";

import AI from "../assets/Blog/AI.png";
import Censorship from "../assets/Blog/Censorship.png";
import Energy from "../assets/Blog/Energy.png";
import Tech from "../assets/Blog/Tech.png";
import Win from "../assets/Blog/Win10.png";

const blogData = [
  {
    title: "The Countdown Is On",
    desc: "Navigating the Windows 10 End-of-Support Deadline",
    img: Win,
    link: "https://machineofmind.blogspot.com/2025/10/the-countdown-is-on.html",
    date: "October 09, 2025",
    readTime: "5 min read",
  },
  {
    title: "Tech Week Singapore 2025",
    desc: "Connecting Cloud, Code, and the Future of Intelligent Systems",
    img: Tech,
    link: "https://machineofmind.blogspot.com/2025/10/tech-week-singapore-2025.html",
    date: "October 03, 2025",
    readTime: "7 min read",
  },
  {
    title: "When AI Comes Home",
    desc: "The Unseen Impacts of Data Centers on Our Neighborhoods",
    img: AI,
    link: "https://machineofmind.blogspot.com/2025/09/when-ai-comes-home.html",
    date: "September 25, 2025",
    readTime: "6 min read",
  },
  {
    title: "The Hidden Cost of Intelligence",
    desc: "Is LLM Heading for an Energy Crisis",
    img: Energy,
    link: "https://machineofmind.blogspot.com/2025/08/the-hidden-cost-of-intelligence.html",
    date: "August 10, 2025",
    readTime: "8 min read",
  },
  {
    title: "The Digital Iron Curtain",
    desc: "How Sanctions and Censorship are Reshaping Russia's Tech-Stack",
    img: Censorship,
    link: "https://machineofmind.blogspot.com/2025/07/the-digital-iron-curtain.html",
    date: "July 30, 2025",
    readTime: "9 min read",
  },
];

const Blog = () => {
  return (
    <section className="blog-section" id="Blog">
      <h2 className="header">✍️ My Blog Insights</h2>
      <p className="title">
        &quot;Software is about empowering people with technology.&quot;
      </p>

      <div className="blog-container">
        <Swiper
          modules={[Autoplay, Keyboard, Navigation, Pagination]}
          slidesPerView={1}
          loop={true}
          keyboard={{ enabled: true }}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          className="blog-swiper"
        >
          {blogData.map((item) => (
            <SwiperSlide key={item.link}>
              <div className="blog-card">
                <div className="blog-image">
                  <img
                    loading="lazy"
                    src={item.img}
                    alt={item.title}
                    className="blog-img"
                  />
                  <div className="blog-overlay">
                    <div className="blog-meta">
                      <span className="blog-date">{item.date}</span>
                      <span className="blog-read-time">{item.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="blog-content">
                  <h3 className="blog-title">{item.title}</h3>
                  <p className="blog-desc">{item.desc}</p>

                  <div className="blog-footer">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-link"
                    >
                      Read Full Article
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </a>
                    <span className="blog-tag">Tech Blog</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
