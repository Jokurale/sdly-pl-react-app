import React from "react";

import PropTypes from "prop-types";

import "./Modal.scss";

function Modal({ forwardRef }) {
  return (
    <div className="Modal" ref={forwardRef}>
      <div className="Modal__Body">
        <div className="Modal__Body--success">Message has been sent!</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  forwardRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default Modal;
