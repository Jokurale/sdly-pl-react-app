import React from "react";

import Image from "./Image";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";

import PropTypes from "prop-types";

import PageRefs from "../../js/PageRefs";

import Modal from "./Modal";

import gsap from "gsap";

import { createRef, useEffect } from "react";

import "./Page.scss";

function Page({ dispatch }) {
  useEffect(() => {
    // If comonent did mount, dispatch ready state to preloader handler
    dispatch();
  }, []);

  const modalRef = createRef();

  function displayModal() {
    const tl = gsap.timeline({ defaults: { ease: "power2.easeInOut" } });

    const modal = modalRef.current;

    tl.fromTo(modal, { autoAlpha: 0 }, { autoAlpha: 1 }).to(modal, {
      delay: 1,
      autoAlpha: 0,
    });
  }

  return (
    <div className="Page__Contact" ref={PageRefs.getContactRef()}>
      <div className="container">
        <Modal forwardRef={modalRef} />
        <div className="row">
          <div className="col-12">
            <div className="Contact__Wrapper row">
              <div className="col-12">
                <Header />
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <Image />
              </div>
              <div className="col-12 col-md-6">
                <Form modalAction={displayModal} />
              </div>
              <div className="col-12">
                <Footer />
              </div>
            </div>
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
