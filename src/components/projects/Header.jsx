import "./Header.scss";

import ActionManager from "../../js/ActionManager";
import React from "react";
import Xbtn from "../../svgs/x-close.svg";

export default function Header() {
  this.handleClick = () => {
    ActionManager.hidePage("projects");
  };

  return (
    <div className="Projects__Header">
      <img src={Xbtn} className="close-btn" alt="" onClick={this.handleClick} />
      <h3>Projects</h3>
    </div>
  );
}
