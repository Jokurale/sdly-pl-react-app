import FrontPage from "./components/FrontPage";
import "./styles/bootstrap-grid.css";
import "./styles/master.css";
import "./styles/responsive.css";
import tsConfig from "./js/tsparticles.cfg";

import Particles from "react-tsparticles";

function App() {
  return (
    <div className="App">
      <Particles id="tsparticles" options={tsConfig} />
      <FrontPage />
    </div>
  );
}

export default App;
