import React from "react";

import PageRefs from "../../js/PageRefs";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import "./Page.scss";

import { useEffect } from "react";

export default function Page({ dispatch }) {
  useEffect(() => {
    // If comonent did mount, dispatch ready state to preloader handler
    dispatch();
  }, []);

  return (
    <div className="Page__Projects" ref={PageRefs.getProjectsRef()}>
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

        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
