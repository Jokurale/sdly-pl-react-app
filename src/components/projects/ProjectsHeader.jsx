import React from 'react'
import ActionManager from '../../js/ActionManager'
import Xbtn from '../../svgs/x-close.svg'

import "./ProjectsHeader.scss"

export default function ProjectsHeader() {
    return (
        <div className="projects-header">
            <img src={Xbtn} className="close-btn" alt="" onClick={() => { ActionManager.hidePage('projects') }}/>
            <h3>Projects</h3>
        </div>
    )
}


