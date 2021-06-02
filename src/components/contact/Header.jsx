import "./Header.scss";

import ActionManager from "../../js/ActionManager";
import React from "react";
import Xbtn from "../../svgs/x-close.svg";

export default function Header() {
  const handleClick = () => {
    ActionManager.hidePage("contact");
  };

  return (
    <div className="Contact__Header">
      <img
        src={Xbtn}
        alt="Close this page"
        onClick={handleClick}
        className="close-btn"
      />
      <h3>Leave a message</h3>
    </div>
  );
}
