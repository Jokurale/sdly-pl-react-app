import Jumbotron from "./Jumbotron";
import Nav from "../nav/Nav";
import PropTypes from "prop-types";
import React from "react";
import Socials from "./Socials";
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
