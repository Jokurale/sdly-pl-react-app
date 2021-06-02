import "./Header.scss";

import ActionManager from "../../js/ActionManager";
import React from "react";
import Xbtn from "../../svgs/x-close.svg";

export default function Header() {
  const handleClick = () => {
    ActionManager.hidePage("projects");
  };

  return (
    <div className="Projects__Header">
      <img src={Xbtn} className="close-btn" alt="" onClick={handleClick} />
      <h3>Projects</h3>
    </div>
  );
}
