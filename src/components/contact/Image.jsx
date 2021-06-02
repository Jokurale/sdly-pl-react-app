import "./Image.scss";

import React from "react";
import contactImage from "../../svgs/contact-sub.svg";

export default function Image() {
  return (
    <div className="Contact__Image d-none d-md-block">
      <img src={contactImage} alt="Contact" />
    </div>
  );
}
