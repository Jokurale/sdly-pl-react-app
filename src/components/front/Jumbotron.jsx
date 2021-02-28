import react from "react";
import {ReactComponent as Person} from '../../svgs/person.svg'
import {ReactComponent as Desk} from '../../svgs/desk.svg'

import "./Jumbotron.scss"
import ActionManager from "../../js/ActionManager";

export default function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <div className="row">
                    <div className="jumbo-left col-md-6">
                        <h1>Michał Podsiadły</h1>
                        <h4>JUNIOR FULL-STACK DEVELOPER</h4>
                        <button className="jumbo-left-btn" onClick={ () => { ActionManager.showPage('aboutme') }}>About me</button>
                    </div>
                    <div className="jumbo-right col-md-6 d-flex">
                        <div className="person">
                            <Person />
                        </div>
                        <div className="desk">
                            <Desk />
                        </div>
                </div>
            </div>
        </div>
    )    
}