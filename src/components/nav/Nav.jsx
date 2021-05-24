import React from "react";
import Brand from "./Brand";
import Items from "./Items";

import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="row Navbar">
      <div className="col-12 d-flex align-items-center justify-content-between">
        <Brand />
        <Items />
      </div>
    </nav>
  );
}
