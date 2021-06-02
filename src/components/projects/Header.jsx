import "./Header.scss";

import ActionManager from "../../js/ActionManager";
import React from "react";
import Xbtn from "../../svgs/x-close.svg";

export default function Header() {
  return (
    <div className="Projects__Header">
      <img
        src={Xbtn}
        className="close-btn"
        alt=""
        onClick={() => {
          ActionManager.hidePage("projects");
        }}
      />
      <h3>Projects</h3>
    </div>
  );
}
