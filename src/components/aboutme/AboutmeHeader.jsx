import ActionManager from "../../js/ActionManager"
import Xbtn from '../../svgs/x-close.svg'

import "./AboutmeHeader.scss"

export default function AboutmeHeader() {
    return (
        <div className="aboutme-header">
            <img src={Xbtn} className="close-btn" alt="" onClick={() => { ActionManager.hidePage('aboutme') }}/>
            <h3>About me</h3>
        </div>
    )
}