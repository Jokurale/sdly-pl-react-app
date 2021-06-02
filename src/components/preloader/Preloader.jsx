import "./Preloader.scss";

import PropTypes from "prop-types";
import React from "react";
import preloaderSvg from "../../svgs/preloader_logo.svg";

function Preloader({ forwardRef }) {
  return (
    <div ref={forwardRef} className="Preloader">
      <img src={preloaderSvg} alt="Preloader" />
    </div>
  );
}

Preloader.propTypes = {
  forwardRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default Preloader;
