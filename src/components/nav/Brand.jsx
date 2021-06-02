import "./Brand.scss";

import { ReactComponent as BrandLogo } from "../../svgs/logo.svg";
import React from "react";

export default function Brand() {
  return (
    <div className="Navbar__Logo">
      <BrandLogo />
    </div>
  );
}
