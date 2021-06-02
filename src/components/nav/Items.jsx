import "./Items.scss";

import ActionManager from "../../js/ActionManager";
import React from "react";

export default function Items() {
  this.handleClick = () => {
    ActionManager.showPage("contact");
  };

  return (
    <div className="Navbar__Items d-flex justify-content-between">
      <h3 className="Navbar__Items--item" onClick={this.handleClick}>
        Contact
      </h3>
      <h3 className="Navbar__Items--item" onClick={this.handleClick}>
        Projects
      </h3>
    </div>
  );
}
