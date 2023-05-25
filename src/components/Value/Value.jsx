import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import valueStyle from "./Value.module.css";
import data from "../../utils/accordion";
import indexStyle from "../../index.module.css";
import IMAGES from "../../constants/export";
import "./accordion.css";

const Value = () => {
  return (
    <section className={valueStyle["v-wrapper"]}>
      <div
        className={`${indexStyle.paddings} ${indexStyle.innerWidth} ${indexStyle.flexCenter} ${valueStyle["v-container"]}`}
      >
        {/* left side */}
        <div className={`${valueStyle["v-left"]}`}>
          <div className={`${valueStyle["image-container"]}`}>
            <img src={IMAGES.value} alt="value-image" />
          </div>
        </div>

        {/* right side */}
        <div className={`${indexStyle.flexColStart} ${valueStyle["v-right"]}`}>
          <span className={indexStyle.orangeText}>Our Value</span>
          <span className={indexStyle.primaryText}>Value We Give to You</span>
          <span className={indexStyle.secondaryText}>
            We always ready to help by providing the best services for you.
            <br />
            We believe a good balance to live can make your life better
          </span>
          <Accordion
            className={valueStyle.accordion}
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={`${indexStyle.flexCenter} ${valueStyle.accordionButton}`}
                    >
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div
                        className={`${indexStyle.flexCenter} 
                      ${valueStyle.icon}`}
                      >
                        {item.icon}
                      </div>
                      <span
                        className={`${indexStyle.primaryText} ${valueStyle.primaryText}`}
                      >
                        {item.heading}
                      </span>
                      <div
                        className={`${indexStyle.flexCenter} 
                      ${valueStyle.icon}`}
                      >
                        <MdOutlineArrowDropDown />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className={indexStyle.secondaryText}>{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
