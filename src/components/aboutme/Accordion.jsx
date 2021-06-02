import React from "react";
import "./Accordion.scss";

import PropTypes from "prop-types";

import { RiArrowDropUpLine as ArrowPointer } from "react-icons/ri";

import { useState, useEffect, useRef } from "react";

function AboutmeAccordion({ title, children }) {
  const [toogled, setToogle] = useState(false);

  const accordionBodyRef = useRef();
  const accordionArrowRef = useRef();

  useEffect(() => {
    accordionBodyRef.current.classList.toggle("active");
    accordionArrowRef.current.classList.toggle("rotate");
  }, [toogled]);

  return (
    <div className="Aboutme__Accordion">
      <div
        className="Aboutme__AccordionHeader"
        onClick={() => {
          setToogle(!toogled);
        }}
      >
        <button>{title}</button>
        <div
          className="Aboutme__AccordionHeaderDropDown"
          ref={accordionArrowRef}
        >
          <ArrowPointer />
        </div>
      </div>
      <div className="Aboutme__AccordionBody active" ref={accordionBodyRef}>
        {children}
      </div>
      <hr />
    </div>
  );
}

AboutmeAccordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default AboutmeAccordion;
