import FrontPage from "./components/front/FrontPage";
import ContactPage from "./components/contact/ContactPage";
import Particles from "react-tsparticles";
import Preloader from "./components/preloader/Preloader";
import PreloaderHandler from "./js/PreloaderHandler";

import { useRef } from "react";

import tsConfig from "./js/tsparticles.cfg";

import "./Fonts.css";
import "./App.scss";

import "./AppSetup";

function App() {
  const preloaderRef = useRef();
  const preloaderHandle = new PreloaderHandler(preloaderRef);

  return (
    <div className="App">
      <Preloader forwardRef={preloaderRef} />
      <Particles options={tsConfig} id="tsparticles" />
      <ContactPage />
      <FrontPage preloaderFunc={preloaderHandle.hidePreloader} />
    </div>
  );
}

export default App;
