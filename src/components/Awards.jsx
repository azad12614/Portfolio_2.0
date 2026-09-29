import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Awards.css";

import hultPrize2023 from "../assets/Awards/2023_HULT.png";
import mentorAward2023 from "../assets/Awards/2023_Mentor.webp";
import trainerCert2023 from "../assets/Awards/2023_Trainer.jpg";
import mentorAward2024 from "../assets/Awards/2024_Mentor.webp";
import nasa2024 from "../assets/Awards/2024_NASA.webp";
import puProgramming2024 from "../assets/Awards/2024_PU.jpg";
import thesis from "../assets/Awards/2025_Thesis.jpg";
import faangSeminar from "../assets/Awards/FAANG.png";
import icpc from "../assets/Awards/ICPC.png";
import uias from "../assets/Awards/UIAS.png";

const awards = [
  {
    title: "2023 HULT PRIZE Certification",
    image: hultPrize2023,
  },
  {
    title: "Best Mentor Award, Autumn 2023",
    image: mentorAward2023,
  },
  {
    title: "Trainer Certification, Autumn 2023",
    image: trainerCert2023,
  },
  {
    title: "2024 NASA Space Apps Challenge Certification",
    image: nasa2024,
  },
  {
    title: "2024 PU Programming Contest Certification",
    image: puProgramming2024,
  },
  {
    title: "Best Mentor Award, Spring 2024",
    image: mentorAward2024,
  },
  {
    title: "FAANG Seminar Certification",
    image: faangSeminar,
  },
  {
    title: "B.Sc Thesis Paper",
    image: thesis,
  },
  {
    title: "ICPC Certificate of Achievement (2021, 2022, 2023, 2024)",
    image: icpc,
  },
  {
    title: "Web Dev Intern Certificate — UIAS & UAN, Feb 2026",
    image: uias,
  },
];

function Awards() {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAutoplay = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (isPlaying) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <section className="award-section" id="Awards">
      <h2 className="header">🏆 My Achievements</h2>
      <p className="title">
        &quot;Achievements empower through innovation.&quot;
      </p>
      <Swiper
        modules={[Autoplay, Keyboard, Pagination, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="award-swiper"
      >
        <button
          type="button"
          className="award-play-toggle"
          onClick={toggleAutoplay}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        {awards.map((award, index) => (
          <SwiperSlide key={index}>
            <div className="award-slide" title={award.title}>
              <img
                src={award.image}
                alt={award.title}
                className="award-slide-image"
                loading="lazy"
              />
              <div className="award-label">{award.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Awards;
