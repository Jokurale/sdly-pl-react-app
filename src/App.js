import FrontPage from "./components/front/FrontPage";
import ContactPage from "./components/contact/ContactPage";
import Particles from "react-tsparticles";
import Preloader from "./components/preloader/Preloader";
import PreloaderHandler from "./js/PreloaderHandler";

import { useRef, useState } from "react";

import tsConfig from "./js/tsparticles.cfg";

import "./Fonts.css";
import "./App.scss";

import "./AppSetup";

function App() {
  const preloaderRef = useRef();
  const preloaderHandle = new PreloaderHandler(preloaderRef);

  // Example garbage code
  const contactPageRef = useRef();
  const closeContact = () => {
    contactPageRef.current.style.top = "100%";
  };

  const showContact = () => {
    contactPageRef.current.style.top = "0%";
  };

  // End of garbage code, when removing, please remove contact page reference and action branch right to close btn in contact header

  return (
    <div className="App">
      <Preloader forwardRef={preloaderRef} />
      <Particles options={tsConfig} id="tsparticles" />
      <ContactPage
        closeContactAction={closeContact}
        contactPageRef={contactPageRef}
      />
      <FrontPage
        showContactPage={showContact}
        preloaderFunc={preloaderHandle.hidePreloader}
      />
    </div>
  );
}

export default App;
