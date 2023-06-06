import React from "react";
import "./Companies.css";
import IMAGES from "../../constants/export";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={IMAGES.prologis} alt="prologis-image" />
        <img src={IMAGES.tower} alt="tower-image" />
        <img src={IMAGES.equinix} alt="equinix-image" />
        <img src={IMAGES.realty} alt="realty-image" />
      </div>
    </section>
  );
};

export default Companies;
