import React from "react";
import IMAGES from "../../constants/export";
import indexStyle from "../../index.module.css";
import heroStyle from "./Hero.module.css";
import { HiLocationMarker } from "react-icons/hi";
import Button from "../../components/UI/button/Button";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className={`${heroStyle["hero-wrapper"]}`}>
      <div
        className={`${indexStyle.paddings} ${indexStyle.flexCenter} ${indexStyle.innerWidth} ${heroStyle["hero-container"]}`}
      >
        {/* left side */}
        <div className={`${indexStyle.flexColStart} ${heroStyle["hero-left"]}`}>
          <div className={`${heroStyle["hero-title"]}`}>
            <div className={`${heroStyle["orange-circle"]}`}></div>
            <h1>
              Discover
              <br />
              most suitable <br />
              property
            </h1>
          </div>
          <div
            className={`${indexStyle.flexColStart} ${heroStyle["hero-des"]}`}
          >
            <span className={`${indexStyle.secondaryText}`}>
              Find a variety of properties that suit you very easily
            </span>
            <span className={`${indexStyle.secondaryText}`}>
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div
            className={`${indexStyle.flexCenter} ${heroStyle["search-bar"]}`}
          >
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <Button text="Search" />
          </div>

          <div className={`${indexStyle.flexCenter} ${heroStyle.stats}`}>
            <div className={`${indexStyle.flexColCenter} ${heroStyle.stat}`}>
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className={indexStyle.secondaryText}>Premium Products</span>
            </div>

            <div className={`${indexStyle.flexColCenter} ${heroStyle.stat}`}>
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className={indexStyle.secondaryText}>Happy Customers</span>
            </div>

            <div className={`${indexStyle.flexColCenter} ${heroStyle.stat}`}>
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className={indexStyle.secondaryText}>Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className={`${indexStyle.flexCenter} ${heroStyle["hero-right"]}`}>
          <div className={`${heroStyle["image-container"]}`}>
            <img src={IMAGES.heroImg} alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
