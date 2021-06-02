import "./Footer.scss";

import React from "react";
import codeThinking from "../../svgs/code_thinking.svg";

export default function Footer() {
  return (
    <div className="Projects__Footer">
      <img src={codeThinking} alt="Code thinking" />
    </div>
  );
}
