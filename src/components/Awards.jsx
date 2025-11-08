import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Awards.css";

import hultPrize2023 from "../assets/Awards/2023_HULT.png";
import mentorAward2023 from "../assets/Awards/2023_Mentor.png";
import trainerCert2023 from "../assets/Awards/2023_Trainer.jpg";
import nasa2024 from "../assets/Awards/2024_NASA.png";
import puProgramming2024 from "../assets/Awards/2024_PU.jpg";
import mentorAward2024 from "../assets/Awards/2024_Mentor.png";
import cadetCoordinator2025 from "../assets/Awards/2025_Coordinator.jpg";
import faangSeminar from "../assets/Awards/FAANG.png";
import thesis from "../assets/Awards/2025_Thesis.jpg";

const awards = [
  {
    title: "2023 HULT PRIZE Certification",
    image: hultPrize2023,
  },
  {
    title: "2023 Mentor Awards",
    image: mentorAward2023,
  },
  {
    title: "2023 Trainer Certification",
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
    title: "2024 Mentor Award",
    image: mentorAward2024,
  },
  {
    title: "2025 Cadet Bootcamp Coordinator",
    image: cadetCoordinator2025,
  },
  {
    title: "FAANG Seminar Certification",
    image: faangSeminar,
  },
  {
    title: "B.Sc Thesis Paper",
    image: thesis,
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
