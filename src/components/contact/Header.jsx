import React from "react";
import Xbtn from "../../svgs/x-close.svg";

import "./Header.scss";

import ActionManager from "../../js/ActionManager";

export default function Header() {
  return (
    <div className="Contact__Header">
      <img
        src={Xbtn}
        alt="Close this page"
        onClick={() => {
          ActionManager.hidePage("contact");
        }}
        className="close-btn"
      />
      <h3>Leave a message</h3>
    </div>
  );
}
