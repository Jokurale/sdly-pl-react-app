import "./Fonts.css";
import "./App.scss";
import "./AppSetup";

import AboutmePage from "./components/aboutme/Page";
import ContactPage from "./components/contact/Page";
import FrontPage from "./components/front/Page";
import Particles from "react-tsparticles";
import Preloader from "./components/preloader/Preloader";
import PreloaderHandler from "./js/PreloaderHandler";
import ProjectsPage from "./components/projects/Page";
import React from "react";
import tsConfig from "./js/tsparticles.cfg";
import { useRef } from "react";

function App() {
  const preloaderRef = useRef();
  const preloaderHandle = new PreloaderHandler(preloaderRef);

  return (
    <div className="App">
      <Preloader forwardRef={preloaderRef} />
      <Particles options={tsConfig} id="tsparticles" />
      <AboutmePage dispatch={preloaderHandle.dispatchReady} />
      <ProjectsPage dispatch={preloaderHandle.dispatchReady} />
      <ContactPage dispatch={preloaderHandle.dispatchReady} />
      <FrontPage dispatch={preloaderHandle.dispatchReady} />
    </div>
  );
}

export default App;
