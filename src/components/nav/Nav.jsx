import "./Nav.scss";

import Brand from "./Brand";
import Items from "./Items";
import React from "react";

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
