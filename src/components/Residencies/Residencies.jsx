import React from "react";
import residenceStyle from "./Residencies.module.css";
import indexStyle from "../../index.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../../utils/slider";
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import "./swiper.css";

const Residencies = () => {
  return (
    <section className={`${residenceStyle["r-wrapper"]}`}>
      <div
        className={`${indexStyle.paddings} ${indexStyle.innerWidth} ${residenceStyle["r-container"]}`}
      >
        <div
          className={`${indexStyle.flexColStart} ${residenceStyle["r-head"]}`}
        >
          <span className={`${indexStyle.orangeText}`}>Best Choices</span>
          <span className={`${indexStyle.primaryText}`}>
            Popular Residencies
          </span>
        </div>

        <Swiper {...sliderSettings} className="swiper">
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div
                className={`${indexStyle.flexColStart} ${residenceStyle["r-card"]}`}
              >
                <img src={card.image} alt="home" />
                <span
                  className={`${indexStyle.secondaryText} ${residenceStyle["r-price"]}`}
                >
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className={`${indexStyle.primaryText}`}>{card.name}</span>
                <span className={`${indexStyle.secondaryText}`}>
                  {card.detail}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className={`${indexStyle.flexCenter} ${residenceStyle["r-buttons"]}`}>
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
