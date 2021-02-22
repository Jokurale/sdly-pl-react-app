import FrontPage from "./components/FrontPage";
import Particles from "react-tsparticles";
import Preloader from "./components/preloader/Preloader";
import PreloaderHandler from "./js/PreloaderHandler";

import { useRef } from "react";

import tsConfig from "./js/tsparticles.cfg";
import "./styles/bootstrap-grid.css";
import "./styles/master.css";
import "./styles/responsive.css";

function App() {
  const preloaderRef = useRef();
  const preloaderHandle = new PreloaderHandler(preloaderRef);

  return (
    <div className="App">
      <Preloader forwardRef={preloaderRef} />
      <Particles options={tsConfig} id="tsparticles" />
      <FrontPage preloaderFunc={preloaderHandle.hidePreloader} />
    </div>
  );
}

export default App;
