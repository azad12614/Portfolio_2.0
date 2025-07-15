import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Awards.css";

const awards = [
  {
    title: "2023 HULT PRIZE Certification",
    image: "../assets/Awards/2023_HULT_PRIZE.png",
  },
  {
    title: "2023 Mentor Awards",
    image: "../assets/Awards/2023_Mentor.png",
  },
  {
    title: "2023 Trainer Certification",
    image: "../assets/Awards/2023_Trainer.jpg",
  },
  {
    title: "2024 NASA Space Apps Challenge Certification",
    image: "../assets/Awards/2024_NASA.png",
  },
  {
    title: "2024 PU Programming Contest Certification",
    image: "../assets/Awards/2024_PU.jpg",
  },
  {
    title: "2024 Mentor Award",
    image: "../assets/Awards/2024_Mentor.png",
  },
  {
    title: "2025 Cadet Bootcamp Coordinator",
    image: "../assets/Awards/2025_Coordinator.jpg",
  },
  {
    title: "FAANG Seminar Certification",
    image: "../assets/Awards/FAANG.png",
  },
];

function Awards() {
  return (
    <section className="award-section" id="Awards">
      <h2 className="header">🏆 My Achievements</h2>
      <p className="title">“Achievements empower through innovation.”</p>
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
        className="award-swiper"
      >
        {awards.map((award, index) => (
          <SwiperSlide key={index}>
            <div
              className="award-slide"
              style={{
                loading: "lazy",
                backgroundImage: `url(${award.image})`,
              }}
              title={award.title}
            >
              <div className="award-label">{award.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Awards;
