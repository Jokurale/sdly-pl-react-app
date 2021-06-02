import "./Header.scss";

import ActionManager from "../../js/ActionManager";
import React from "react";
import Xbtn from "../../svgs/x-close.svg";

export default function Header() {
  const handleClick = () => {
    ActionManager.hidePage("aboutme");
  };

  return (
    <div className="Aboutme__Header">
      <img src={Xbtn} className="close-btn" alt="" onClick={handleClick} />
      <h3>About me</h3>
    </div>
  );
}
