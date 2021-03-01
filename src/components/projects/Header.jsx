import React from 'react'
import ActionManager from '../../js/ActionManager'
import Xbtn from '../../svgs/x-close.svg'

import "./Header.scss"

export default function Header() {
    return (
        <div className="Projects__Header">
            <img src={Xbtn} className="close-btn" alt="" onClick={() => { ActionManager.hidePage('projects') }}/>
            <h3>Projects</h3>
        </div>
    )
}


