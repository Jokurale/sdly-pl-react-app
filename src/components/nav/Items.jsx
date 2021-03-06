import "./Items.scss";

import ActionManager from "../../js/ActionManager";
import React from "react";

export default function Items() {
  const handleClick = () => {
    ActionManager.showPage("contact");
  };

  const items = ["Contact", "Projects"];

  return (
    <div className="Navbar__Items d-flex justify-content-between">
      {items.map((title) => (
        <h3 key={title} className="Navbar__Items--item" onClick={handleClick}>
          {title}
        </h3>
      ))}
    </div>
  );
}
