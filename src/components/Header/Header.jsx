import React from "react";
import IMAGES from "../../constants/export";
import indexStyle from "../../index.module.css";
import headerStyle from "./Header.module.css";
import Button from "../UI/button/Button";

const Header = () => {
  return (
    <section className={`${headerStyle["h-wrapper"]}`}>
      <div
        className={`${indexStyle.flexCenter} ${indexStyle.paddings} ${indexStyle.innerWidth} ${headerStyle["h-container"]}`}
      >
        <img src={IMAGES.logo} alt="logo" width={100} />

        <div className={`${indexStyle.flexCenter} ${headerStyle["h-menu"]}`}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <Button
            className={`${headerStyle["header-button"]}`}
            text="Contact"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
