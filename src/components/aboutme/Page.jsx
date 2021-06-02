import "./Page.scss";

import Body from "./Body";
import Header from "./Header";
import PageRefs from "../../js/PageRefs";
import PropTypes from "prop-types";
import React from "react";
import { useEffect } from "react";

function Page({ dispatch }) {
  useEffect(() => {
    // If comonent did mount, dispatch ready state to preloader handler
    dispatch();
  }, []);

  return (
    <div className="Page__Aboutme" ref={PageRefs.getAboutmeRef()}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
}

Page.propTypes = {
  dispatch: PropTypes.func,
};

export default Page;
