import React from "react";
import aboutmeCoffeeBreak from "../../svgs/aboutme-coffee-break.svg";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="Aboutme__Footer">
      <img src={aboutmeCoffeeBreak} alt="Let's sip a bit of coffee" />
      Whoaa.. what a run. Coffee break!
    </div>
  );
}
