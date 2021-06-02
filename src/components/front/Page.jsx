import React from "react";
import Nav from "../nav/Nav";
import Jumbotron from "./Jumbotron";
import Socials from "./Socials";

import PropTypes from "prop-types";

import { useEffect } from "react";

function Page({ dispatch }) {
  useEffect(() => {
    // If comonent did mount, dispatch ready state to preloader handler
    dispatch();
  }, []);

  return (
    <div className="container h-100 Page__Front">
      <Socials />
      <Nav />
      <Jumbotron />
    </div>
  );
}

Page.propTypes = {
  dispatch: PropTypes.func,
};

export default Page;
