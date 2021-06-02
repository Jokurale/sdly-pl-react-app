import "./Jumbotron.scss";

import ActionManager from "../../js/ActionManager";
import { ReactComponent as Desk } from "../../svgs/desk.svg";
import { ReactComponent as Person } from "../../svgs/person.svg";
import React from "react";

export default function Jumbotron() {
  return (
    <div className="Jumbotron">
      <div className="row">
        <div className="Jumbotron__Left col-md-6">
          <h1>Michał Podsiadły</h1>
          <h4>JUNIOR FULL-STACK DEVELOPER</h4>
          <button
            className="Jumbotron__Left--btn"
            onClick={() => {
              ActionManager.showPage("aboutme");
            }}
          >
            About me
          </button>
        </div>
        <div className="Jumbotron__Right col-md-6 d-flex">
          <div className="person">
            <Person />
          </div>
          <div className="desk">
            <Desk />
          </div>
        </div>
      </div>
    </div>
  );
}
