import ActionManager from "../../js/ActionManager"
import Xbtn from '../../svgs/x-close.svg'

import "./Header.scss"

export default function Header() {
    return (
        <div className="Aboutme__Header">
            <img src={Xbtn} className="close-btn" alt="" onClick={() => { ActionManager.hidePage('aboutme') }}/>
            <h3>About me</h3>
        </div>
    )
}